import {
  Rule, Tree, SchematicsException,
  apply, url, template, move,
  chain, mergeWith, branchAndMerge, SchematicContext
} from '@angular-devkit/schematics';

import { strings, normalize } from '@angular-devkit/core';

import { Schema as ProjectSchema } from './schema';



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function project(_options: ProjectSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {



    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }
    console.log(_options)
    // // convert workspace to string
    // const workspaceContent = workspaceConfig.toString();

    // // parse workspace string into JSON object
    // const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);

    const _projectName = _options.name as string;
    console.log(_projectName);
    const _projectPath = `projects/${_projectName}`;

    const templateSource = apply(url('./files'), [
      template({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: _projectName
      }),
      move(normalize(_projectPath as string))
    ]);

    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ]);
  };
}
