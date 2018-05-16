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

export interface WebPackage {
  packageId: number;
  name: string;
  version: string;
  website?: string;
  license?: string;
  licenseText?: string;
  copyright?: string;
  createdBy?: string;
  verified?: boolean;
  extra?: {
    verification?: PackageVerification;
    stats?: PackageStats;
    latest?: number;
  };
}

export interface PackageVerification {
  verifiedOn: string;
  verifiedBy: string;
  comments: string;
}

export interface PackageStats {
  numProjects: number;
}
