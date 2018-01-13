"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var locale = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<locale xmlns=\"http://purl.org/net/xbiblio/csl\" version=\"1.0\" xml:lang=\"en-US\">\n  <info>\n    <rights license=\"http://creativecommons.org/licenses/by-sa/3.0/\">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>\n    <updated>2015-10-10T23:31:02+00:00</updated>\n  </info>\n  <style-options punctuation-in-quote=\"true\"/>\n  <date form=\"text\">\n    <date-part name=\"month\" suffix=\" \"/>\n    <date-part name=\"day\" suffix=\", \"/>\n    <date-part name=\"year\"/>\n  </date>\n  <date form=\"numeric\">\n    <date-part name=\"month\" form=\"numeric-leading-zeros\" suffix=\"/\"/>\n    <date-part name=\"day\" form=\"numeric-leading-zeros\" suffix=\"/\"/>\n    <date-part name=\"year\"/>\n  </date>\n  <terms>\n    <term name=\"accessed\">accessed</term>\n    <term name=\"and\">and</term>\n    <term name=\"and others\">and others</term>\n    <term name=\"anonymous\">anonymous</term>\n    <term name=\"anonymous\" form=\"short\">anon.</term>\n    <term name=\"at\">at</term>\n    <term name=\"available at\">available at</term>\n    <term name=\"by\">by</term>\n    <term name=\"circa\">circa</term>\n    <term name=\"circa\" form=\"short\">c.</term>\n    <term name=\"cited\">cited</term>\n    <term name=\"edition\">\n      <single>edition</single>\n      <multiple>editions</multiple>\n    </term>\n    <term name=\"edition\" form=\"short\">ed.</term>\n    <term name=\"et-al\">et al.</term>\n    <term name=\"forthcoming\">forthcoming</term>\n    <term name=\"from\">from</term>\n    <term name=\"ibid\">ibid.</term>\n    <term name=\"in\">in</term>\n    <term name=\"in press\">in press</term>\n    <term name=\"internet\">internet</term>\n    <term name=\"interview\">interview</term>\n    <term name=\"letter\">letter</term>\n    <term name=\"no date\">no date</term>\n    <term name=\"no date\" form=\"short\">n.d.</term>\n    <term name=\"online\">online</term>\n    <term name=\"presented at\">presented at the</term>\n    <term name=\"reference\">\n      <single>reference</single>\n      <multiple>references</multiple>\n    </term>\n    <term name=\"reference\" form=\"short\">\n      <single>ref.</single>\n      <multiple>refs.</multiple>\n    </term>\n    <term name=\"retrieved\">retrieved</term>\n    <term name=\"scale\">scale</term>\n    <term name=\"version\">version</term>\n\n    <!-- ANNO DOMINI; BEFORE CHRIST -->\n    <term name=\"ad\">AD</term>\n    <term name=\"bc\">BC</term>\n\n    <!-- PUNCTUATION -->\n    <term name=\"open-quote\">\u201C</term>\n    <term name=\"close-quote\">\u201D</term>\n    <term name=\"open-inner-quote\">\u2018</term>\n    <term name=\"close-inner-quote\">\u2019</term>\n    <term name=\"page-range-delimiter\">\u2013</term>\n\n    <!-- ORDINALS -->\n    <term name=\"ordinal\">th</term>\n    <term name=\"ordinal-01\">st</term>\n    <term name=\"ordinal-02\">nd</term>\n    <term name=\"ordinal-03\">rd</term>\n    <term name=\"ordinal-11\">th</term>\n    <term name=\"ordinal-12\">th</term>\n    <term name=\"ordinal-13\">th</term>\n\n    <!-- LONG ORDINALS -->\n    <term name=\"long-ordinal-01\">first</term>\n    <term name=\"long-ordinal-02\">second</term>\n    <term name=\"long-ordinal-03\">third</term>\n    <term name=\"long-ordinal-04\">fourth</term>\n    <term name=\"long-ordinal-05\">fifth</term>\n    <term name=\"long-ordinal-06\">sixth</term>\n    <term name=\"long-ordinal-07\">seventh</term>\n    <term name=\"long-ordinal-08\">eighth</term>\n    <term name=\"long-ordinal-09\">ninth</term>\n    <term name=\"long-ordinal-10\">tenth</term>\n\n    <!-- LONG LOCATOR FORMS -->\n    <term name=\"book\">\n      <single>book</single>\n      <multiple>books</multiple>\n    </term>\n    <term name=\"chapter\">\n      <single>chapter</single>\n      <multiple>chapters</multiple>\n    </term>\n    <term name=\"column\">\n      <single>column</single>\n      <multiple>columns</multiple>\n    </term>\n    <term name=\"figure\">\n      <single>figure</single>\n      <multiple>figures</multiple>\n    </term>\n    <term name=\"folio\">\n      <single>folio</single>\n      <multiple>folios</multiple>\n    </term>\n    <term name=\"issue\">\n      <single>number</single>\n      <multiple>numbers</multiple>\n    </term>\n    <term name=\"line\">\n      <single>line</single>\n      <multiple>lines</multiple>\n    </term>\n    <term name=\"note\">\n      <single>note</single>\n      <multiple>notes</multiple>\n    </term>\n    <term name=\"opus\">\n      <single>opus</single>\n      <multiple>opera</multiple>\n    </term>\n    <term name=\"page\">\n      <single>page</single>\n      <multiple>pages</multiple>\n    </term>\n    <term name=\"number-of-pages\">\n      <single>page</single>\n      <multiple>pages</multiple>\n    </term>\n    <term name=\"paragraph\">\n      <single>paragraph</single>\n      <multiple>paragraphs</multiple>\n    </term>\n    <term name=\"part\">\n      <single>part</single>\n      <multiple>parts</multiple>\n    </term>\n    <term name=\"section\">\n      <single>section</single>\n      <multiple>sections</multiple>\n    </term>\n    <term name=\"sub verbo\">\n      <single>sub verbo</single>\n      <multiple>sub verbis</multiple>\n    </term>\n    <term name=\"verse\">\n      <single>verse</single>\n      <multiple>verses</multiple>\n    </term>\n    <term name=\"volume\">\n      <single>volume</single>\n      <multiple>volumes</multiple>\n    </term>\n\n    <!-- SHORT LOCATOR FORMS -->\n    <term name=\"book\" form=\"short\">\n      <single>bk.</single>\n      <multiple>bks.</multiple>\n    </term>\n    <term name=\"chapter\" form=\"short\">\n      <single>chap.</single>\n      <multiple>chaps.</multiple>\n    </term>\n    <term name=\"column\" form=\"short\">\n      <single>col.</single>\n      <multiple>cols.</multiple>\n    </term>\n    <term name=\"figure\" form=\"short\">\n      <single>fig.</single>\n      <multiple>figs.</multiple>\n    </term>\n    <term name=\"folio\" form=\"short\">\n      <single>fol.</single>\n      <multiple>fols.</multiple>\n    </term>\n    <term name=\"issue\" form=\"short\">\n      <single>no.</single>\n      <multiple>nos.</multiple>\n    </term>\n    <term name=\"line\" form=\"short\">\n      <single>l.</single>\n      <multiple>ll.</multiple>\n    </term>\n    <term name=\"note\" form=\"short\">\n      <single>n.</single>\n      <multiple>nn.</multiple>\n    </term>\n    <term name=\"opus\" form=\"short\">\n      <single>op.</single>\n      <multiple>opp.</multiple>\n    </term>\n    <term name=\"page\" form=\"short\">\n      <single>p.</single>\n      <multiple>pp.</multiple>\n    </term>\n    <term name=\"number-of-pages\" form=\"short\">\n      <single>p.</single>\n      <multiple>pp.</multiple>\n    </term>\n    <term name=\"paragraph\" form=\"short\">\n      <single>para.</single>\n      <multiple>paras.</multiple>\n    </term>\n    <term name=\"part\" form=\"short\">\n      <single>pt.</single>\n      <multiple>pts.</multiple>\n    </term>\n    <term name=\"section\" form=\"short\">\n      <single>sec.</single>\n      <multiple>secs.</multiple>\n    </term>\n    <term name=\"sub verbo\" form=\"short\">\n      <single>s.v.</single>\n      <multiple>s.vv.</multiple>\n    </term>\n    <term name=\"verse\" form=\"short\">\n      <single>v.</single>\n      <multiple>vv.</multiple>\n    </term>\n    <term name=\"volume\" form=\"short\">\n      <single>vol.</single>\n      <multiple>vols.</multiple>\n    </term>\n\n    <!-- SYMBOL LOCATOR FORMS -->\n    <term name=\"paragraph\" form=\"symbol\">\n      <single>\xB6</single>\n      <multiple>\xB6\xB6</multiple>\n    </term>\n    <term name=\"section\" form=\"symbol\">\n      <single>\xA7</single>\n      <multiple>\xA7\xA7</multiple>\n    </term>\n\n    <!-- LONG ROLE FORMS -->\n    <term name=\"director\">\n      <single>director</single>\n      <multiple>directors</multiple>\n    </term>\n    <term name=\"editor\">\n      <single>editor</single>\n      <multiple>editors</multiple>\n    </term>\n    <term name=\"editorial-director\">\n      <single>editor</single>\n      <multiple>editors</multiple>\n    </term>\n    <term name=\"illustrator\">\n      <single>illustrator</single>\n      <multiple>illustrators</multiple>\n    </term>\n    <term name=\"translator\">\n      <single>translator</single>\n      <multiple>translators</multiple>\n    </term>\n    <term name=\"editortranslator\">\n      <single>editor &amp; translator</single>\n      <multiple>editors &amp; translators</multiple>\n    </term>\n\n    <!-- SHORT ROLE FORMS -->\n    <term name=\"director\" form=\"short\">\n      <single>dir.</single>\n      <multiple>dirs.</multiple>\n    </term>\n    <term name=\"editor\" form=\"short\">\n      <single>ed.</single>\n      <multiple>eds.</multiple>\n    </term>\n    <term name=\"editorial-director\" form=\"short\">\n      <single>ed.</single>\n      <multiple>eds.</multiple>\n    </term>\n    <term name=\"illustrator\" form=\"short\">\n      <single>ill.</single>\n      <multiple>ills.</multiple>\n    </term>\n    <term name=\"translator\" form=\"short\">\n      <single>tran.</single>\n      <multiple>trans.</multiple>\n    </term>\n    <term name=\"editortranslator\" form=\"short\">\n      <single>ed. &amp; tran.</single>\n      <multiple>eds. &amp; trans.</multiple>\n    </term>\n\n    <!-- VERB ROLE FORMS -->\n    <term name=\"container-author\" form=\"verb\">by</term>\n    <term name=\"director\" form=\"verb\">directed by</term>\n    <term name=\"editor\" form=\"verb\">edited by</term>\n    <term name=\"editorial-director\" form=\"verb\">edited by</term>\n    <term name=\"illustrator\" form=\"verb\">illustrated by</term>\n    <term name=\"interviewer\" form=\"verb\">interview by</term>\n    <term name=\"recipient\" form=\"verb\">to</term>\n    <term name=\"reviewed-author\" form=\"verb\">by</term>\n    <term name=\"translator\" form=\"verb\">translated by</term>\n    <term name=\"editortranslator\" form=\"verb\">edited &amp; translated by</term>\n\n    <!-- SHORT VERB ROLE FORMS -->\n    <term name=\"director\" form=\"verb-short\">dir. by</term>\n    <term name=\"editor\" form=\"verb-short\">ed. by</term>\n    <term name=\"editorial-director\" form=\"verb-short\">ed. by</term>\n    <term name=\"illustrator\" form=\"verb-short\">illus. by</term>\n    <term name=\"translator\" form=\"verb-short\">trans. by</term>\n    <term name=\"editortranslator\" form=\"verb-short\">ed. &amp; trans. by</term>\n\n    <!-- LONG MONTH FORMS -->\n    <term name=\"month-01\">January</term>\n    <term name=\"month-02\">February</term>\n    <term name=\"month-03\">March</term>\n    <term name=\"month-04\">April</term>\n    <term name=\"month-05\">May</term>\n    <term name=\"month-06\">June</term>\n    <term name=\"month-07\">July</term>\n    <term name=\"month-08\">August</term>\n    <term name=\"month-09\">September</term>\n    <term name=\"month-10\">October</term>\n    <term name=\"month-11\">November</term>\n    <term name=\"month-12\">December</term>\n\n    <!-- SHORT MONTH FORMS -->\n    <term name=\"month-01\" form=\"short\">Jan.</term>\n    <term name=\"month-02\" form=\"short\">Feb.</term>\n    <term name=\"month-03\" form=\"short\">Mar.</term>\n    <term name=\"month-04\" form=\"short\">Apr.</term>\n    <term name=\"month-05\" form=\"short\">May</term>\n    <term name=\"month-06\" form=\"short\">Jun.</term>\n    <term name=\"month-07\" form=\"short\">Jul.</term>\n    <term name=\"month-08\" form=\"short\">Aug.</term>\n    <term name=\"month-09\" form=\"short\">Sep.</term>\n    <term name=\"month-10\" form=\"short\">Oct.</term>\n    <term name=\"month-11\" form=\"short\">Nov.</term>\n    <term name=\"month-12\" form=\"short\">Dec.</term>\n\n    <!-- SEASONS -->\n    <term name=\"season-01\">Spring</term>\n    <term name=\"season-02\">Summer</term>\n    <term name=\"season-03\">Autumn</term>\n    <term name=\"season-04\">Winter</term>\n  </terms>\n</locale>\n\n";

exports.default = locale;