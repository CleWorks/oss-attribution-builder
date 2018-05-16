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

export interface WebProject {
  projectId: string;
  title: string;
  version: string;
  description: string;
  plannedRelease: any;
  createdOn: any;
  contacts: { [key: string]: string[] };
  acl: { [key: string]: AccessLevel };
  packagesUsed: PackageUsage[];
  metadata: { [key: string]: any };
  access: {
    level: AccessLevel;
    canEdit: boolean;
  };
}

export interface PackageUsage {
  packageId: number;
  notes?: string;
  // tag-added properties
  [key: string]: string | boolean | number | undefined;
}

export const AccessLevelStrength: { [key: string]: number } = {
  viewer: 1,
  editor: 2,
  owner: 3,
};
export type AccessLevel = 'owner' | 'editor' | 'viewer';
