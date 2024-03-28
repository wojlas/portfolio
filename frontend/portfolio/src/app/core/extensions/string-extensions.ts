import SnippetService from '../services/snippets.service';

String.prototype.translate = function(): string {
  const service = SnippetService;

  return service.snippets[this as string] || this as string;
}