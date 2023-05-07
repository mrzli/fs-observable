import { Observable } from 'rxjs';
import klaw from 'klaw';
import { FilePathStats, FindOptions, toKlawFindOptions } from '@gmjs/fs-shared';

export function fromFindFsEntries(
  directory: string,
  options?: FindOptions
): Observable<FilePathStats> {
  return new Observable((subscriber) => {
    klaw(directory, toKlawFindOptions(options))
      .on('data', (item) => {
        subscriber.next(item);
      })
      .on('error', (error) => {
        subscriber.error(error);
      })
      .on('end', () => {
        subscriber.complete();
      });
  });
}
