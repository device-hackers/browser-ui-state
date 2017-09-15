# Matrix of supported devices and browsers
## Synopsis
Popular browsers in Europe and America are not cluttered, e.g. there is single Chrome for Android and 
single Chrome for iOS and both can be found on Google Play and Apple iTunes respectively.
But popular browsers in [APAC](https://en.wikipedia.org/wiki/Asia-Pacific) is completely different story...

Looks like Google Play is banned in China and browser's manufactures have to distribute their browsers directly from their 
websites or from alternative app stores. Although Google 
[tries](https://www.forbes.com/sites/dougyoung/2015/06/04/google-u-turns-back-to-china-with-app-store-plan/#541f566d4000) 
to get back to China with its Google Play, it is
[still not there](http://www.androidpolice.com/2017/02/06/no-really-this-time-a-censored-google-play-store-for-china-is-coming-at-some-point-maybe/).
But I have no reliable info, [some says](https://www.quora.com/How-does-Google-Play-in-China-function) that free apps 
are available there, it is also not present in [the list on wiki](https://en.wikipedia.org/wiki/Websites_blocked_in_mainland_China), 
but then it's not clear why [uc.cn](http://uc.cn) gives direct link to .apk for Chinese version of 
UC Browser instead of uploading it to Google Play.
Apple iTunes [is not banned but censored](https://en.wikipedia.org/wiki/Censorship_of_the_iTunes_Store).

And also there are different versions of the "same" browser (just try to search for "baidu browser" and you will see).

## Measuring popularity
Time is most valuable resource for humans, that's why we need to prioritize and focus on what matters most.
In context of this library - high prio support should be given only to really popular browsers, but for this we need 
to have information and figures.

There are [lots of tools and companies](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers) which exposes stats 
with [StatCounter](https://en.wikipedia.org/wiki/StatCounter) possessing the largest amount of data, but it's 
[not so obvious](https://medium.com/samsung-internet-dev/think-you-know-the-top-web-browsers-458a0a070175) 
as it might seem, and here are the top reasons why:
1. At least China is a separate world (and it has [almost 1/5](https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population)
 of the total population of our planet), they have their own ~~Google~~ [Baidu](https://en.wikipedia.org/wiki/Baidu), 
own ~~WhatsApp~~ [WeChat](https://en.wikipedia.org/wiki/WeChat) (see [list](https://en.wikipedia.org/wiki/List_of_virtual_communities_with_more_than_100_million_active_users)), 
own ~~eBay~~ [Alibaba](https://en.wikipedia.org/wiki/Alibaba_Group), 
own ~~McAfee~~ [Qihoo 360](https://en.wikipedia.org/wiki/Qihoo_360), 
and even own ~~Wikipedias~~ [Baike.com](https://en.wikipedia.org/wiki/Hudong) / [Baidu Baike](https://en.wikipedia.org/wiki/Baidu_Baike) - mostly
 because all usual to us services are blocked there.
And most probably they have their own StatCounter and I more than sure mobile browsers market share there will be pretty
different from that [shown by StatCounter](http://gs.statcounter.com/browser-market-share/mobile/china)... 
1. Still Chrome looks like global leader, but did anyone considered/noticed that more and more browsers are starting 
to report user-agent strings completely exact as Chrome does? 
Just install [QQ browser](https://play.google.com/store/apps/details?id=com.tencent.mtt.intl&hl=en) 
and open http://whatsmyuseragent.org/ in both browsers and try to find the difference.
Same goes for [360 Secure Browser](https://en.wikipedia.org/wiki/360_Secure_Browser): 
> As of 2017, the latest versions of 360 Secure Browser do not offer distinguishable user-agent string. It spoofs itself either as Google Chrome or Internet Explorer, making it difficult for developers to target or identify.

So... are we still so sure about market share figures?

## Scope Omission
So let's try to list exact browsers with exact links and try to see if we have any exact figures associated with exactly
those browsers. Google Play gives us downloads count, while Apple iTunes gives only reviews count which unfortunately
has nothing to do with downloads, but at least can be used to compare products relatively to each other.
[Windows 10 Mobile](https://en.wikipedia.org/wiki/Windows_10_Mobile) is [intentionally](http://gs.statcounter.com/os-market-share/mobile/worldwide) unsupported as:
>Sales have decreased rapidly since its release, to the point of Windows 10 Mobile being considered irrelevant in the mobile operating system landscape.

And thanx God we don't have to support buggy [IE Mobile](https://en.wikipedia.org/wiki/Internet_Explorer_Mobile) :beetle:.

Information is based on the **September 2017** :calendar: landscape and sorted according to [Mobile Browser Market Share Worldwide](http://gs.statcounter.com/browser-market-share/mobile/worldwide):

Group | OS | Designed for device class | Unique browser ID | Market browser name | Install link | Downloads / reviews count | Version & latest release date | Support level 
------------ | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- 
![Chrome logo](https://www.jameshay.co.uk/img/icons/Chrome.png) [Chrome](https://en.wikipedia.org/wiki/Google_Chrome) | ![Android](https://widgets.future-hawk-content.co.uk/img/specs/android.png) | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `chr-for-andr` | Google Chrome | [:link:](https://play.google.com/store/apps/details?id=com.android.chrome&hl=en) | :floppy_disk:&nbsp;1b+ <br> :star:&nbsp;8m+ | v61 <br> 2017-09-05| :chart_with_upwards_trend: High
&nbsp; | ![iOS](https://en.5ibc.net/img/m/ios.png) | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `chr-for-ios` | Google Chrome | [:link:](https://itunes.apple.com/us/app/google-chrome/id535886823?mt=8) | :star:&nbsp;56k+ | v61 <br> 2017-09-05 | :chart_with_upwards_trend: High
&nbsp;  |
![Safari logo](https://scanword.ru/local/templates/scanword_ru/images/browsers/safari.png) [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) | ![iOS](https://en.5ibc.net/img/m/ios.png) | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `safari` | Safari | - | - | v10.3.3 <br> 2017-07-19 | :chart_with_upwards_trend: High
&nbsp;  |
![UC logo](http://free-uc-browser.ru/wp-content/uploads/2017/05/cropped-uc-browser-logo-ava-32x32.png) [UC](https://en.wikipedia.org/wiki/UC_Browser) | ![Android](https://widgets.future-hawk-content.co.uk/img/specs/android.png) | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-en-for-andr` | UC Browser | [:link:](https://play.google.com/store/apps/details?id=com.UCMobile.intl) | :floppy_disk:&nbsp;100m+ <br> :star:&nbsp;15m+ | v11.4.5.1005 <br> 2017-09-07 | :chart_with_upwards_trend: High
&nbsp; | &nbsp; | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-mini-for-andr` | UC Browser Mini | [:link:](https://play.google.com/store/apps/details?id=com.uc.browser.en&hl=en) | :floppy_disk:&nbsp;100m+ <br> :star:&nbsp;3m+ | v10.9.8 <br> 2017-09-12 | :chart_with_downwards_trend: Low
&nbsp; | &nbsp; | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-cn-on-g-play` | UC浏览器 | [:link:](https://play.google.com/store/apps/details?id=com.UCMobile) | :floppy_disk:&nbsp;5m+ | v10.10 <br> 2016-07-03 | :x: Not supported
&nbsp; | &nbsp; | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-cn-on-uc.cn` | UC | [:link:](http://pdds.ucweb.com/download/newest/UCBrowser/zh-cn/145/999/web_banner) | ? | v11.6.8.9 <br> 2017-09-05 | :chart_with_upwards_trend: High
&nbsp; | &nbsp; | ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-hd-en-for-andr` | UC Browser HD for Tablet | [:link:](https://play.google.com/store/apps/details?id=com.uc.browser.hd) | :floppy_disk:&nbsp;10m+ | v3.4 <br> 2015-09-29 | :x: Not supported
&nbsp; | ![iOS](https://en.5ibc.net/img/m/ios.png) | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) | `uc-en-for-ios` | UC Browser | [:link:](https://itunes.apple.com/us/app/uc-browser-fast-browsing-powerful-ad-block/id1048518592) | :star:&nbsp;1k+ | v10.9.1.998 <br> 2017-07-25| :chart_with_upwards_trend: High
&nbsp; | &nbsp; | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) | `uc-cn-for-ios` | UC浏览器 | [:link:](https://itunes.apple.com/cn/app/uc-liu-lan-qi-ji-su-yu-le/id586871187?mt=8) | :star:&nbsp;214k+ | v11.6.1.1003 <br> 2017-08-11 | :chart_with_upwards_trend: High
&nbsp; | &nbsp; | ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-hd-en-for-ios` | UC Browser&nbsp;+ | [:link:](https://itunes.apple.com/us/app/uc-browser+-for-ipad/id724100507?mt=8) | ? | v2.4.0.367 <br> 2014-02-12 | :x: Not supported
&nbsp; | &nbsp; | ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | `uc-hd-cn-for-ios` | UC浏览器HD | [:link:](https://itunes.apple.com/us/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8hd/id686910560) | :star:&nbsp;79 | v3.0.1.776 <br> 2017-03-30 | :chart_with_downwards_trend: Low

SamBro
Opera
![Android Stock logo](https://www.aerocool.com.tw/images/fp-lanswitcher/images/Globe_icon.png) [Android Stock](https://en.wikipedia.org/wiki/List_of_features_in_Android#General) | Android | ![smartphone](http://icons.iconarchive.com/icons/musett/iphone-4/24/iPhone-Black-W2-icon.png) ![tablet](http://icons.iconarchive.com/icons/adidadidu/ipad/24/iPad-Landscape-Space-Background-icon.png) | Android Stock browser | Internet | &nbsp; | &nbsp; | :chart_with_upwards_trend:&nbsp;High
https://en.wikipedia.org/wiki/Firefox_for_Android
https://en.wikipedia.org/wiki/Firefox_for_iOS
In China [there is no single marketplace](http://technode.com/2017/06/02/top-10-android-app-stores-china-2017/) for apps, so we should rely on browser manufacturer's official websites.

## Matrix

### Legend
- :+1: - Browser's readings on this device is present in the spreadsheet and is either falls into default group or 
exceptional one, and everything which goes to the spreadsheet - should also be reflected in the code if needed
- _N/A_ - Browser does not exist on corresponding device
- :question: - Browser does exist on corresponding device, but it's reading are not present in spreadsheet 
so it is unknown if lib will work correctly there
- :construction: - Readings are going to be taken and support to be added to code if needed

&nbsp; | [Chrome](https://en.wikipedia.org/wiki/Google_Chrome) | [Samsung Browser](https://en.wikipedia.org/wiki/Samsung_Internet_for_Android) | Android 4 Stock | Android 5 Stock | Android 6 Stock | [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) | [UC](https://en.wikipedia.org/wiki/UC_Browser) | [FF](https://en.wikipedia.org/wiki/Firefox_for_Mobile) | [Opr](https://en.wikipedia.org/wiki/Opera_Mobile) | [QQ](https://play.google.com/store/apps/details?id=com.tencent.mtt.intl) | [DU](https://play.google.com/store/apps/details?id=com.baidu.browser.inter)
------------ | ------------- | -------------- | ------------- | -------------- | ------------- | -------------- | ------------- | ------------- | ------------- | ------------- | ------------- 
**Apple iPhone with 5.5″ ([7 Plus](http://www.gsmarena.com/apple_iphone_7_plus-8065.php), [6(S) Plus](http://www.gsmarena.com/apple_iphone_6s_plus-7243.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPhone with 4.7″ ([7](http://www.gsmarena.com/apple_iphone_7-8064.php), [6(S)](http://www.gsmarena.com/apple_iphone_6s-7242.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :+1: (6S) | :construction: | :construction: | :construction: | :construction: 
**Apple iPhone with 4.0″ ([5(S/SE/C)](http://www.gsmarena.com/apple_iphone_5s-5685.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPhone with 3.5″ ([4(S)](http://www.gsmarena.com/apple_iphone_4s-4212.php), [3G(S)](http://www.gsmarena.com/apple_iphone_3gs-2826.php) - [1st gen](http://www.gsmarena.com/apple_iphone-1827.php))** | :question: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**Apple iPad with 12.9″ ([Pro 12.9](http://www.gsmarena.com/apple_ipad_pro_12_9-8717.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPad with 10.5″ ([Pro 10.5](http://www.gsmarena.com/apple_ipad_pro_10_5-8716.php))** | :question: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPad with 9.7″ ([5-th gen](http://www.gsmarena.com/apple_ipad_9_7-8620.php) - [1-st gen](http://www.gsmarena.com/apple_ipad_wi_fi-3828.php), [Pro 9.7](http://www.gsmarena.com/apple_ipad_pro_9_7-7984.php), [Air 2](http://www.gsmarena.com/apple_ipad_air_2-6742.php) - [Air](http://www.gsmarena.com/apple_ipad_air-5797.php))** | :question: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPad with 7.9″ ([Mini 4](http://www.gsmarena.com/apple_ipad_mini_4-7561.php) - [Mini](http://www.gsmarena.com/apple_ipad_mini_wi_fi_+_cellular-5061.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Samsung Galaxy S8](http://www.gsmarena.com/samsung_galaxy_s8-8161.php)** | :construction: | :construction: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S7 Edge](http://www.gsmarena.com/samsung_galaxy_s7_edge-7945.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S7](http://www.gsmarena.com/samsung_galaxy_s7-7821.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S6](http://www.gsmarena.com/samsung_galaxy_s6-6849.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S5](http://www.gsmarena.com/samsung_galaxy_s5-6033.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S4](http://www.gsmarena.com/samsung_i9500_galaxy_s4-5125.php)** | :+1: | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | :+1: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy A7 2017](http://www.gsmarena.com/samsung_galaxy_a7_(2016)-7759.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Samsung Galaxy Note 5](http://www.gsmarena.com/samsung_galaxy_note5-7431.php)** | :+1: | :construction: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Note 4](http://www.gsmarena.com/samsung_galaxy_note_4-6434.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Note 3](http://www.gsmarena.com/samsung_galaxy_note_3-5665.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Note Edge](http://www.gsmarena.com/samsung_galaxy_note_edge-6631.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Samsung Galaxy Tab 4 10.1″](http://www.gsmarena.com/samsung_galaxy_tab_4_10_1-6247.php)** | :+1: | :question: | :+1: | :question: | _N/A_ | _N/A_ | :+1: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Tab 3 10.1″](http://www.gsmarena.com/samsung_galaxy_tab_3_10_1_p5220-5491.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Tab 2 10.1″](http://www.gsmarena.com/samsung_galaxy_tab_2_10_1_p5100-4567.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Google Pixel](http://www.gsmarena.com/google_pixel-8346.php)** | :construction: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Google Pixel XL](http://www.gsmarena.com/google_pixel_xl-8345.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Google Nexus 5X](http://www.gsmarena.com/lg_nexus_5x-7556.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Google Nexus 6P](http://www.gsmarena.com/huawei_nexus_6p-7588.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Google Nexus 7 2013](http://www.gsmarena.com/asus_google_nexus_7_(2013)-5600.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[LG G6](http://www.gsmarena.com/lg_g6-8466.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G5](http://www.gsmarena.com/lg_g5-7815.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G4](http://www.gsmarena.com/lg_g4-6901.php)** | :+1: | _N/A_ | _N/A_ | :question: | :+1: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G3](http://www.gsmarena.com/lg_g3-6294.php)** | :+1: | _N/A_ | :question: | :+1: | :question: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G2](http://www.gsmarena.com/lg_g2-5543.php)** | :+1: | _N/A_ | :question: | :question: | :question: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Lenovo A850](http://www.gsmarena.com/lenovo_a850-5689.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Lenovo A889](http://www.gsmarena.com/lenovo_a889-6369.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Lenovo Tab 2 A7-30](http://www.gsmarena.com/lenovo_tab_2_a7_30-6956.php)** | :+1: | _N/A_ | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
&nbsp; | | | | | | | | | | | | 
**[Xiaomi Mi3](http://www.gsmarena.com/xiaomi_mi_3-5678.php)** | :+1: | _N/A_ | :question: | :question: | :question: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
