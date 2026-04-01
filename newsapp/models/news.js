// This model represents a single news item //
// each news item will be created using this class //
// screens and components will rely on these fields //

class News {
  constructor(
    id,          // unique identifier //
    headline,    // title of the news article //
    date,        // publication date (ISO string recommended) //
    author,      // author of the article //
    agency,      // news source (cnn, fox, etc) //
    description, // full article description //
    imageUrl,    // web-based image URL (JPG) //
    category     // used to filter items by screen (us, world, tech, etc) //
  ) {
    this.id = id;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
  }
}

export default News;