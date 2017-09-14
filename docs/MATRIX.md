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
own ~~Skype~~ [Tencent QQ](https://en.wikipedia.org/wiki/Tencent_QQ), 
own ~~Amazon~~ [Alibaba](https://en.wikipedia.org/wiki/Alibaba_Group), 
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

Information is based on the Q3 2017 landscape:

Group | OS | Device class | Simplified browser name | Browser name as it appears in the market | Install link | Downloads/reviews count | Support level | Comment 
------------ | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------
![Chrome logo](https://www.jameshay.co.uk/img/icons/Chrome.png)&nbsp;[Chrome](https://en.wikipedia.org/wiki/Google_Chrome) | Android | Smartphones & Tablets | [Chrome for Android](https://en.wikipedia.org/wiki/Google_Chrome_for_Android) | Google Chrome: Fast & Secure | [link](https://play.google.com/store/apps/details?id=com.android.chrome&hl=en) | 1,000,000,000 - 5,000,000,000 | :chart_with_upwards_trend:&nbsp;High |
-- | iOS | Smartphones & Tablets | Chrome for iOS | Google Chrome | [link](https://itunes.apple.com/us/app/google-chrome/id535886823?mt=8) | 56591 | :chart_with_downwards_trend:&nbsp;Low |

## Legend
- :+1: - Browser's readings on this device is present in the spreadsheet and is either falls into default group or 
exceptional one, and everything which goes to the spreadsheet - should also be reflected in the code if needed
- _N/A_ - Browser does not exist on corresponding device
- :question: - Browser does exist on corresponding device, but it's reading are not present in spreadsheet 
so it is unknown if lib will work correctly there
- :construction: - Readings are going to be taken and support to be added to code if needed

## Matrix
-- | [Chrome](https://en.wikipedia.org/wiki/Google_Chrome) | [Samsung Browser](https://en.wikipedia.org/wiki/Samsung_Internet_for_Android) | Android 4 Stock | Android 5 Stock | Android 6 Stock | [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) | [UC](https://en.wikipedia.org/wiki/UC_Browser) | [FF](https://en.wikipedia.org/wiki/Firefox_for_Mobile) | [Opr](https://en.wikipedia.org/wiki/Opera_Mobile) | [QQ](https://play.google.com/store/apps/details?id=com.tencent.mtt.intl) | [DU](https://play.google.com/store/apps/details?id=com.baidu.browser.inter)
------------ | ------------- | -------------- | ------------- | -------------- | ------------- | -------------- | ------------- | ------------- | ------------- | ------------- | ------------- 
**Apple iPhone with 5.5″ ([7 Plus](http://www.gsmarena.com/apple_iphone_7_plus-8065.php), [6(S) Plus](http://www.gsmarena.com/apple_iphone_6s_plus-7243.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPhone with 4.7″ ([7](http://www.gsmarena.com/apple_iphone_7-8064.php), [6(S)](http://www.gsmarena.com/apple_iphone_6s-7242.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :+1: (6S) | :construction: | :construction: | :construction: | :construction: 
**Apple iPhone with 4.0″ ([5(S/SE/C)](http://www.gsmarena.com/apple_iphone_5s-5685.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPhone with 3.5″ ([4(S)](http://www.gsmarena.com/apple_iphone_4s-4212.php), [3G(S)](http://www.gsmarena.com/apple_iphone_3gs-2826.php) - [1st gen](http://www.gsmarena.com/apple_iphone-1827.php))** | :question: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**Apple iPad with 12.9″ ([Pro 12.9](http://www.gsmarena.com/apple_ipad_pro_12_9-8717.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPad with 10.5″ ([Pro 10.5](http://www.gsmarena.com/apple_ipad_pro_10_5-8716.php))** | :question: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPad with 9.7″ ([5-th gen](http://www.gsmarena.com/apple_ipad_9_7-8620.php) - [1-st gen](http://www.gsmarena.com/apple_ipad_wi_fi-3828.php), [Pro 9.7](http://www.gsmarena.com/apple_ipad_pro_9_7-7984.php), [Air 2](http://www.gsmarena.com/apple_ipad_air_2-6742.php) - [Air](http://www.gsmarena.com/apple_ipad_air-5797.php))** | :question: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :question: | :construction: | :construction: | :construction: | :construction: 
**Apple iPad with 7.9″ ([Mini 4](http://www.gsmarena.com/apple_ipad_mini_4-7561.php) - [Mini](http://www.gsmarena.com/apple_ipad_mini_wi_fi_+_cellular-5061.php))** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :+1: | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Samsung Galaxy S8](http://www.gsmarena.com/samsung_galaxy_s8-8161.php)** | :construction: | :construction: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S7 Edge](http://www.gsmarena.com/samsung_galaxy_s7_edge-7945.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S7](http://www.gsmarena.com/samsung_galaxy_s7-7821.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S6](http://www.gsmarena.com/samsung_galaxy_s6-6849.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S5](http://www.gsmarena.com/samsung_galaxy_s5-6033.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy S4](http://www.gsmarena.com/samsung_i9500_galaxy_s4-5125.php)** | :+1: | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | :+1: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy A7 2017](http://www.gsmarena.com/samsung_galaxy_a7_(2016)-7759.php)** | :+1: | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Samsung Galaxy Note 5](http://www.gsmarena.com/samsung_galaxy_note5-7431.php)** | :+1: | :construction: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Note 4](http://www.gsmarena.com/samsung_galaxy_note_4-6434.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Note 3](http://www.gsmarena.com/samsung_galaxy_note_3-5665.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Note Edge](http://www.gsmarena.com/samsung_galaxy_note_edge-6631.php)** | :+1: | :+1: | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Samsung Galaxy Tab 4 10.1″](http://www.gsmarena.com/samsung_galaxy_tab_4_10_1-6247.php)** | :+1: | :question: | :+1: | :question: | _N/A_ | _N/A_ | :+1: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Tab 3 10.1″](http://www.gsmarena.com/samsung_galaxy_tab_3_10_1_p5220-5491.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Samsung Galaxy Tab 2 10.1″](http://www.gsmarena.com/samsung_galaxy_tab_2_10_1_p5100-4567.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Google Pixel](http://www.gsmarena.com/google_pixel-8346.php)** | :construction: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Google Pixel XL](http://www.gsmarena.com/google_pixel_xl-8345.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Google Nexus 5X](http://www.gsmarena.com/lg_nexus_5x-7556.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Google Nexus 6P](http://www.gsmarena.com/huawei_nexus_6p-7588.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Google Nexus 7 2013](http://www.gsmarena.com/asus_google_nexus_7_(2013)-5600.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[LG G6](http://www.gsmarena.com/lg_g6-8466.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G5](http://www.gsmarena.com/lg_g5-7815.php)** | :+1: | _N/A_ | _N/A_ | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G4](http://www.gsmarena.com/lg_g4-6901.php)** | :+1: | _N/A_ | _N/A_ | :question: | :+1: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G3](http://www.gsmarena.com/lg_g3-6294.php)** | :+1: | _N/A_ | :question: | :+1: | :question: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[LG G2](http://www.gsmarena.com/lg_g2-5543.php)** | :+1: | _N/A_ | :question: | :question: | :question: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Lenovo A850](http://www.gsmarena.com/lenovo_a850-5689.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
**[Lenovo A889](http://www.gsmarena.com/lenovo_a889-6369.php)** | :+1: | _N/A_ | :+1: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Lenovo Tab 2 A7-30](http://www.gsmarena.com/lenovo_tab_2_a7_30-6956.php)** | :+1: | _N/A_ | :question: | _N/A_ | _N/A_ | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
-- | | | | | | | | | | | | 
**[Xiaomi Mi3](http://www.gsmarena.com/xiaomi_mi_3-5678.php)** | :+1: | _N/A_ | :question: | :question: | :question: | _N/A_ | :question: | :construction: | :construction: | :construction: | :construction: 
