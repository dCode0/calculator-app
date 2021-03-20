import * as firebase from "firebase";
import { firestore } from "firebase";

class Firestore {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  getItem(): Promise<firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
    const app = firebase.app("RexApp");

    return firestore(app)
      .collection(this.key)
      .orderBy("timestamp", "desc")
      .get();
  }

  setItem(value: Record<string, unknown>): Promise<unknown> {
    const app = firebase.app("RexApp");

    return firestore(app).collection(this.key).add(value);
  }
}

export const DEFAULT_COLLECTION = "calculatorApplication";
export default new Firestore(DEFAULT_COLLECTION);