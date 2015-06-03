/**
 * @license
 * Copyright 2015 The Lovefield Project Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
goog.setTestOnly();
goog.require('goog.testing.jsunit');
goog.require('lf.structs.Set');


function testSmoke() {
  var set = new lf.structs.Set();
  set.add(1);
  assertEquals(1, set.size);
  set.delete(1);
  assertEquals(0, set.size);


  for (var i = 0; i < 10; ++i) {
    set.add(i * 10);
  }
  assertTrue(set.has(10));
  assertFalse(set.has(100));
  set.clear();
  assertEquals(0, set.size);
}
