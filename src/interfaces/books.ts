export interface BooksState {
  loadingClassicBooks: boolean,
  loadingProgrammingBooks: boolean,
  loadingDesignBooks: boolean,
  classicBooks: Books,
  programmingBooks: Books,
  designBooks: Books,
}

export interface IPayloadGetBooks {
  limit?: number | null
  offset?: number | null
}

export interface Books {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works?: (WorksEntity)[] | null;
}
export interface WorksEntity {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
  subject?: (string)[] | null;
  ia_collection?: (string)[] | null;
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition: string;
  lending_identifier: string;
  authors?: (AuthorsEntity)[] | null;
  first_publish_year: number;
  ia: string;
  public_scan: boolean;
  has_fulltext: boolean;
  availability: Availability;
}
export interface AuthorsEntity {
  key: string;
  name: string;
}
export interface Availability {
  status: string;
  available_to_browse: boolean;
  available_to_borrow: boolean;
  available_to_waitlist: boolean;
  is_printdisabled: boolean;
  is_readable: boolean;
  is_lendable: boolean;
  is_previewable: boolean;
  identifier: string;
  isbn?: string | null;
  oclc?: null;
  openlibrary_work: string;
  openlibrary_edition: string;
  last_loan_date?: string | null;
  num_waitlist?: string | null;
  last_waitlist_date?: string | null;
  is_restricted: boolean;
  is_browseable: boolean;
  __src__: string;
}
