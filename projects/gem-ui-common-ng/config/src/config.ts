import { DOCUMENT } from '@angular/common';
import { InjectionToken, Provider } from '@angular/core';

export const ConfigToken = new InjectionToken<Config>('config');

/**
 * Provides access to configuration properties obtained from a static config block in the
 * page markup.
 *
 * ### Example:
 * With this config block in the page markup:

```html
<script type="config">{"MYVAR": "hello"}</script>
```

 * A client requesting `@Inject(ConfigToken)` from the framework will receive the following
 * `Config` object:
 *
```typescript
{
  MYVAR: "hello"
}
```
 */
export const ConfigProvider: Provider = {
  provide: ConfigToken,
  deps: [DOCUMENT],
  useFactory: configurationFactory,
};

/**
 * Reads configuration properties out of the DOM and returns a parsed Config object.
 */
export function configurationFactory(doc: Document): Config {
  const configElement = doc.querySelector(`script[type=config]`);
  if (!configElement) {
    return {};
  }
  return JSON.parse(configElement.textContent || '{}');
}

/**
 * Config is a dictionary of key-value pairs obtained from the app environment vars.
 */
export interface Config {
  [key: string]: any;
}
