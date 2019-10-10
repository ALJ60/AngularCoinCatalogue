import { Catalogue } from './catalogue';

export class CatalogueEdition {
  id?: number;
  catalogue: Catalogue;
  edition: string;
  fullName(): string {
    return this.catalogue.catalogue + (this.edition === '' ? '' : ' - ' + this.edition);
  }
}
