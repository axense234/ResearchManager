// Types
import { EntityType, EntityTypePlural } from '@researchmanager/shared/types';
import { OptionObjectBuilderIncludeObject } from 'src/modules/util/builder/types';
// Helpers
import { chooseAllowedBuilderValues } from './chooseAllowedBuilderValues';
import { entityTypeToSingle } from './entityTypeToSingle';

export const buildAllowedIncludeValuesObject = (
  filteredValues: (EntityType | EntityTypePlural)[],
  optionObject: OptionObjectBuilderIncludeObject = {},
  includeDepth: number = 1,
  visitedEntities: Set<EntityType> = new Set(),
  currentPath: EntityType[] = [],
  rootEntity: EntityType = 'user',
): OptionObjectBuilderIncludeObject => {
  if (includeDepth <= 0) return {};

  const newOptionObject = { ...optionObject };
  const currentRoot =
    rootEntity ||
    (filteredValues.length ? entityTypeToSingle(filteredValues[0]) : undefined);

  filteredValues.forEach((value) => {
    const singleEntity = entityTypeToSingle(value);

    if (singleEntity === currentRoot) return;

    if (visitedEntities.has(singleEntity)) return;

    if (includeDepth === 1) {
      newOptionObject[value] = true;
    } else {
      const { allowedIncludeValues } = chooseAllowedBuilderValues(singleEntity);
      const newVisited = new Set(visitedEntities);

      newVisited.add(singleEntity);

      // Finally, a use case for recursion

      const nestedInclude = buildAllowedIncludeValuesObject(
        allowedIncludeValues,
        {},
        includeDepth - 1,
        newVisited,
        [...currentPath, singleEntity],
        currentRoot,
      );

      newOptionObject[value] =
        Object.keys(nestedInclude).length > 0
          ? { include: nestedInclude }
          : true;
    }
  });

  return newOptionObject;
};
