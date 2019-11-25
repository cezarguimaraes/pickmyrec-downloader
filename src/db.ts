import { readJSON, writeJson, ensureDir } from "fs-extra";
import { lock, unlock, LockOptions } from "proper-lockfile";

// PURGE/MIGRATE DATABASE IF MOD CHANGES!
// MUST BE PRIME FOR OPTIMAL RESULTS
const MOD = 1009;
const DB_DIR = "./db";

const bucket = (id: number) => `db/${id % MOD}.json`;

const lockOptions: LockOptions = {
  realpath: false
};

export const getDocument = async (id: number) => {
  const bid = bucket(id);
  await ensureDir(DB_DIR);
  const db = await readJSON(bid, { throws: false }).catch(() => null);
  return db ? db[id] : null;
};

export const setDocument = async (id: number, v: any) => {
  const bid = bucket(id);
  await ensureDir(DB_DIR);
  try {
    await lock(bid, lockOptions);
    const db = await readJSON(bid, { throws: false }).catch(() => ({}));
    db[id] = v;
    await writeJson(bid, db);
  } catch (e) {
    console.log(`deu erro aqui ${e}`);
  } finally {
    await unlock(bid);
  }
};
