

export class minus3OrMultiply5Resolver {
  readonly initialValue: number;
  constructor(initialValue: number) {
    this.initialValue = initialValue;
  }

  public findSolution(target: number): Promise<string | null> {
    function find(start, history) {
      if (start == target)
        return history;
      else if (start > target)
        return null;
      else
        return find(start + 5, "(" + history + " + 5)") ||
               find(start * 3, "(" + history + " * 3)");
    }
    return new Promise((resolve: (value: string) => void, reject: (error?: string) => void) => {
      const value = find(this.initialValue, `${this.initialValue}`);
      if(value) {
        resolve(value);
      } else {
        reject(null);
      }
    });
  }

}


