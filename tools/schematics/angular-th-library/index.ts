import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  const { name } = schema;
  const style = 'scss';
  return chain([
    externalSchematic(
      '@nrwl/schematics',
      'lib',
      {
        name: `${name}/components`,
        style,
        tags: `scope:${name},type:component`
      },
      { interactive: false }
    ),
    externalSchematic(
      '@nrwl/schematics',
      'lib',
      {
        name: `${name}/http`,
        style,
        tags: `scope:${name},type:http`
      },
      { interactive: false }
    ),
    externalSchematic(
      '@nrwl/schematics',
      'lib',
      {
        name: `${name}/pages`,
        style,
        tags: `scope:${name},type:page`
      },
      { interactive: false }
    ),
    externalSchematic(
      '@nrwl/schematics',
      'lib',
      {
        name: `${name}/resolvers`,
        style,
        tags: `scope:${name},type:resolver`
      },
      { interactive: false }
    ),
    externalSchematic(
      '@nrwl/schematics',
      'lib',
      {
        name: `${name}/util`,
        style,
        tags: `scope:${name},type:util`
      },
      { interactive: false }
    )
  ]);
}
