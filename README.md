# File System Utilities Using Observable Pattern

This project is a collection of utilities for working with the file system using the observable pattern.

## Installation

```bash
npm install --save @gmjs/fs-observable
```

## Functions

### Find

- `fromFindFsEntries(directory: string, options?: FindOptions): Observable<FilePathStats>`
  - Description - Search a directory for files. Search can be limited by depth.
  - Parameters
    - `directory: string` - The directory to search.
    - `options: FindOptions`
      - Description - Options for the search.
      - Fields
        - `depthLimit: number | undefined`:
          - Description
            - The maximum depth to search.
            - Default is `undefined`.
            - If value is `-1` or `undefined`, there is no depth limit (limit is inifnite).
