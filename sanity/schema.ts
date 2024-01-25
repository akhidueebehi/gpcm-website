import { type SchemaTypeDefinition } from 'sanity';
import project from './project-schema';
import books from './book-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, books],
}
