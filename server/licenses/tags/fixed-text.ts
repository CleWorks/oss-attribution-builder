/* Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// NOTE: this tag is referenced from the UI

// tslint:disable:no-empty

export function validateSelf(name, text, tags) {
  if (tags.includes('user-supplied')) {
    return [
      {
        level: 0,
        message:
          `The ${name} license's text is standardized -- ` +
          'if the text is actually different, you may have a different license.',
      },
    ];
  }
}

export function validateUsage(pkg, usage) {}

export const presentation = {
  fixedText: true,
  longText: "This license text is standardized; you don't need to paste it in.",
};
