
class SnippetsService {
  private _snippets!: Record<string, string>;

  public get snippets(): Record<string, string> {
    return this._snippets;
  }

  public set snippets(snippets: Record<string, string>) {
    this._snippets = snippets;
  }
}

export default new SnippetsService();
