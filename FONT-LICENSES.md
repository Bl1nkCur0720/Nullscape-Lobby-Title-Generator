# 第三方字体授权说明 / Third-Party Font Licenses

> 本文件不是法律意见（This document is not legal advice）。
> 字体授权信息基于公开资料整理，可能存在偏差，请以各字体官方发布页为准。

## 1. 总则

本仓库 `fonts/` 目录下的全部字体文件（`.ttf` / `.otf`）均为**第三方作品**，
版权归各自的作者或发行方所有。本项目（Nullscape Lobby Title Generator）：

- **不拥有**这些字体的任何权利；
- **不重新授权**这些字体——它们各自保留原有许可证；
- 仅在**网页端本地预览**（CSS Font Loading API 加载）中使用这些字体文件，
  用于模拟 Roblox 游戏内 Rich Text 的显示效果；
- 生成的 Rich Text 代码只引用 Roblox 官方字体族路径
  （`rbxasset://fonts/families/<Family>.json`），**不嵌入、不分发**任何字体二进制数据。

本项目原创代码的授权见仓库根目录的 `LICENSE`（MIT），该许可**不涵盖** `fonts/` 目录。

## 2. 字体清单（40 个字体族）

| 字体族 | 来源 | 许可证 | 说明 / 链接 |
|---|---|---|---|
| Accanthis ADF Std | Arkandis Digital Foundry (ADF) | 待核验（ADF/GUST 类） | Roblox 引擎同名字体；请向 ADF 官方核验再分发条款 |
| Amatic SC | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Amatic+SC |
| Arimo | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Arimo |
| Balthazar | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Balthazar |
| Bangers | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Bangers |
| Builder Extended | Roblox | Roblox 品牌字体条款 | 见第 4 节 Roblox 链接 |
| Builder Mono | Roblox | Roblox 品牌字体条款 | 见第 4 节 Roblox 链接 |
| Builder Sans | Roblox | Roblox 品牌字体条款 | 见第 4 节 Roblox 链接 |
| Comic Neue Angular | Roblox 修改（原作 Comic Neue，Craig Rozynski） | OFL-1.1 衍生作品，条款待核验 | OFL 要求衍生字体改用新名字，Roblox 已改名；建议核验 Roblox 条款 |
| Creepster | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Creepster |
| Denk One | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Denk+One |
| Fondamento | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Fondamento |
| Fredoka One | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Fredoka+One |
| Grenze Gotisch | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Grenze+Gotisch |
| Guru | 待核验 | 待核验 | Roblox 引擎字体；请核验原始发行方与条款 |
| Highway Gothic | HWYGOTH（FHWA Highway Gothic 克隆版） | freeware，待核验 | Roblox 引擎 "Highway" 字体来源 |
| Inconsolata | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Inconsolata |
| Indie Flower | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Indie+Flower |
| Josefin Sans | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Josefin+Sans |
| Jura | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Jura |
| Kalam | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Kalam |
| Luckiest Guy | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Luckiest+Guy |
| Merriweather | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Merriweather |
| Michroma | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Michroma |
| Montserrat | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Montserrat |
| Nunito | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Nunito |
| Oswald | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Oswald |
| Patrick Hand | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Patrick+Hand |
| Permanent Marker | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Permanent+Marker |
| Press Start 2P | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Press+Start+2P |
| Roboto | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Roboto |
| Roboto Condensed | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Roboto+Condensed |
| Roboto Mono | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Roboto+Mono |
| Roman Antique | 待核验 | freeware，待核验 | Roblox 引擎 "Antique" 字体来源 |
| Sarpanch | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Sarpanch |
| Source Sans Pro | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Source+Sans+Pro |
| Special Elite | Google Fonts | Apache-2.0 | https://fonts.google.com/specimen/Special+Elite |
| Titillium Web | Google Fonts | OFL-1.1 | https://fonts.google.com/specimen/Titillium+Web |
| Ubuntu | Canonical | Ubuntu Font Licence 1.0 | https://ubuntu.com/legal/font-licence |
| Zekton | 待核验 | freeware，待核验 | 请向原始发行方核验再分发条款 |

> 补充：`fonts/*/<Family>.json` 是 Roblox 字体族定义文件。其中部分字面
> （如 BuilderSans 的 Thin/Light/SemiBold、Arimo 的 Italic 等）引用
> `rbxassetid://` 上传资产，这些资产归其上传者所有；网页端预览不使用它们，
> 仅游戏内可能用到。

## 3. 完整许可证文本

### 3.1 SIL Open Font License 1.1（OFL-1.1，适用于上表标注 OFL-1.1 的字体）

```
Copyright (c) <years>, <copyright holders> (<URL|email>),
with Reserved Font Name <Reserved Font Name>.

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org

-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
```

### 3.2 Apache License 2.0（适用于 Arimo、Luckiest Guy、Permanent Marker、Roboto、Roboto Condensed、Roboto Mono、Special Elite）

**请以官方原文为准**：https://www.apache.org/licenses/LICENSE-2.0.txt
（此处为便于仓库内查阅而附上的全文副本，若与官方原文有出入，以官方原文为准。）

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

### 3.3 Ubuntu Font Licence 1.0（适用于 Ubuntu）

全文以 Canonical 官方页面为准：https://ubuntu.com/legal/font-licence
要点：允许使用、学习、修改与再分发，但要求保留版权声明与许可证文本，
且 Ubuntu 名称与商标的使用受 Canonical 商标政策约束。

## 4. Roblox 品牌字体（Builder Sans / Builder Mono / Builder Extended / Comic Neue Angular）

这些字体由 Roblox 制作或修改。Roblox 对其有专门的授权说明，请以官方页面为准：

- Builder Font License（Roblox Creator Docs）：
  https://github.com/Roblox/creator-docs/blob/main/content/en-us/resources/builder-font-license.md
- Roblox 使用条款：https://en.help.roblox.com/hc/articles/115004647846

本项目收录这些字体仅为模拟游戏内标题的显示效果，不主张任何所有权。
若 Roblox 条款不允许在 Roblox 平台之外再分发这些字体文件，请从 `fonts/`
目录中移除对应文件夹（网页端预览会自动退回系统字体，生成的 Rich Text
代码不受影响）。

## 5. 核验与移除请求

- 上表"待核验"项（Accanthis ADF Std、Guru、Highway Gothic、Roman Antique、
  Zekton 等）在进一步分发前，请向原始发行方核验授权条款；
- 建议从 Google Fonts 下载页随字体附带各自的 OFL.txt / LICENSE.txt 放入
  对应字体目录（例如 https://github.com/google/fonts 中的 license 文件）；
- 任何权利人若认为本仓库对其字体的收录存在不当之处，可通过本仓库的
  GitHub Issues 联系仓库所有者（bl1nkCur），我们将在核实后立即移除相关文件。
