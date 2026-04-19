# Firecrawl Skill

Scrape and crawl web pages using the Firecrawl API.

## Usage

`/firecrawl <url> [options]`

## What this skill does

When invoked, use the Firecrawl API to scrape or crawl the given URL and return clean, structured content. The API key is available as the `FIRECRAWL_API_KEY` environment variable.

## Instructions

Given `$ARGUMENTS`:

1. Parse the first argument as the target URL.
2. Parse any additional flags:
   - `--crawl` → use the crawl endpoint (follows links)
   - `--map` → use the map endpoint (returns all URLs)
   - `--formats=<list>` → comma-separated output formats (e.g. `markdown,html`); default is `markdown`
3. Call the appropriate Firecrawl endpoint:
   - Scrape (default): `POST https://api.firecrawl.dev/v1/scrape`
   - Crawl: `POST https://api.firecrawl.dev/v1/crawl`
   - Map: `POST https://api.firecrawl.dev/v1/map`
4. Use `Authorization: Bearer $FIRECRAWL_API_KEY` header.
5. Display the returned content to the user in a readable format.

### Example curl (scrape)

```bash
curl -s -X POST https://api.firecrawl.dev/v1/scrape \
  -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "<URL>", "formats": ["markdown"]}' \
  | jq -r '.data.markdown // .data // .'
```

### Example curl (crawl)

```bash
curl -s -X POST https://api.firecrawl.dev/v1/crawl \
  -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "<URL>", "limit": 10}' \
  | jq '.'
```
