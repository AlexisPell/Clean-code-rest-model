import { buildPostCreateType } from './postCreateType';
import { buildGetAllTypes } from './getAllTypes';
import { buildDeleteType } from './deleteType';

import { Type } from './../../models/models';

const postCreateType = buildPostCreateType(Type);
const getAllTypes = buildGetAllTypes(Type);
const deleteType = buildDeleteType(Type);

export const typeController = {
  postCreateType,
  getAllTypes,
  deleteType,
};
