import { Catalogue } from './catalogue';

export class CatalogueEdition {
  id?: number;
  catalogue: Catalogue;
  edition: string;
  static fullName(catalogueEdition: CatalogueEdition): string {
    return catalogueEdition.catalogue.catalogue + (catalogueEdition.edition === '' ? '' : ' - ' +
           catalogueEdition.edition);
  }
}
