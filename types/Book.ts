/*
 Used https://quicktype.io/ for easier modelling.
*/
export interface BookResult {
    kind:       string;
    totalItems: number;
    items:      Book[];
}

export interface Book {
    kind:        Kind;
    id:          string;
    etag:        string;
    selfLink:    string;
    volumeInfo:  VolumeInfo;
    saleInfo:    SaleInfo;
    accessInfo:  AccessInfo;
    searchInfo?: SearchInfo;
}

export interface AccessInfo {
    country:                Country;
    viewability:            Viewability;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: TextToSpeechPermission;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       AccessViewStatus;
    quoteSharingAllowed:    boolean;
}

export enum AccessViewStatus {
    None = "NONE",
    Sample = "SAMPLE",
}

export enum Country {
    Dk = "DK",
}

export interface Epub {
    isAvailable:   boolean;
    acsTokenLink?: string;
}

export enum TextToSpeechPermission {
    Allowed = "ALLOWED",
}

export enum Viewability {
    NoPages = "NO_PAGES",
    Partial = "PARTIAL",
}

export enum Kind {
    BooksVolume = "books#volume",
}

export interface SaleInfo {
    country:      Country;
    saleability:  Saleability;
    isEbook:      boolean;
    listPrice?:   SaleInfoListPrice;
    retailPrice?: SaleInfoListPrice;
    buyLink?:     string;
    offers?:      Offer[];
}

export interface SaleInfoListPrice {
    amount:       number;
    currencyCode: CurrencyCode;
}

export enum CurrencyCode {
    Dkk = "DKK",
}

export interface Offer {
    finskyOfferType: number;
    listPrice:       OfferListPrice;
    retailPrice:     OfferListPrice;
}

export interface OfferListPrice {
    amountInMicros: number;
    currencyCode:   CurrencyCode;
}

export enum Saleability {
    ForSale = "FOR_SALE",
    NotForSale = "NOT_FOR_SALE",
}

export interface SearchInfo {
    textSnippet: string;
}

export interface VolumeInfo {
    title:                string;
    authors:              string[];
    publisher?:           string;
    publishedDate:        string;
    description?:         string;
    industryIdentifiers?: IndustryIdentifier[];
    readingModes:         ReadingModes;
    pageCount:            number;
    printType:            PrintType;
    categories?:          string[];
    maturityRating:       MaturityRating;
    allowAnonLogging:     boolean;
    contentVersion:       string;
    panelizationSummary:  PanelizationSummary;
    imageLinks?:          ImageLinks;
    language:             Language;
    previewLink:          string;
    infoLink:             string;
    canonicalVolumeLink:  string;
    subtitle?:            string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
    large: string;
    medium:      string;
    extraLarge:      string;

}

export interface IndustryIdentifier {
    type:       Type;
    identifier: string;
}

export enum Type {
    Isbn10 = "ISBN_10",
    Isbn13 = "ISBN_13",
    Other = "OTHER",
}

export enum Language {
    Da = "da",
}

export enum MaturityRating {
    NotMature = "NOT_MATURE",
}

export interface PanelizationSummary {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

export enum PrintType {
    Book = "BOOK",
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}

