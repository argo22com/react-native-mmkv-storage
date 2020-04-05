import { DATA_TYPES } from "../utils";

export default class boolIndex {
  constructor({ id = "default", mmkv, alias, aliasPrefix, key }) {
    this.MMKV = mmkv;
    this.instanceID = id;
  }
  async getKeys() {
    return await this.MMKV.getTypeIndex(this.instanceID, DATA_TYPES.BOOL);
  }
  async hasKey(key) {
    return await this.MMKV.typeIndexerHasKey(
      this.instanceID,
      key,
      DATA_TYPES.BOOL
    );
  }

  async getAll() {
    return promisify(this.MMKV.getAllItemsForType)(
      this.instanceID,
      DATA_TYPES.BOOL
    );
  }
}