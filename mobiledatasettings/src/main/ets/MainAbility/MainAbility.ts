/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import Ability from '@ohos.app.ability.UIAbility';
import type Window from '@ohos.window';
import LogUtils from '../common/utils/LogUtils';

const TAG = 'MainAbility';

export default class MainAbility extends Ability {
  onCreate(want, launchParam): void {
    LogUtils.i(TAG, 'onCreate');
    globalThis.settingsAbilityContext = this.context;
  }

  onDestroy(): void {
    LogUtils.i(TAG, 'onDestroy!');
  }

  onWindowStageCreate(windowStage: Window.WindowStage): void {
    // Main window is created, set main page for this ability
    LogUtils.i(TAG, 'onWindowStageCreate!');

    windowStage.loadContent('pages/index', (err, data) => {
      if (err.code) {
        LogUtils.e(TAG, 'Failed to load the content. Cause: ' + JSON.stringify(err));
        return;
      }
      LogUtils.i(TAG, 'Succeeded in loading the content. Data: ' + JSON.stringify(data));
    });
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    LogUtils.i(TAG, 'onWindowStageDestroy!');
  }

  onForeground(): void {
    // Ability has brought to foreground
    LogUtils.i(TAG, 'onForeground!');
  }

  onBackground(): void {
    // Ability has back to background
    LogUtils.i(TAG, 'onBackground!');
  }
}
