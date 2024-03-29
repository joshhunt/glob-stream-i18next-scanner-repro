i18n._("Loading...");
i18n._("Backslashes in single quote: ' \\ '");
i18n._(
  "This is \
a multiline \
string"
);

i18n.t("car", { context: "blue", count: 1 }); // output: 'One blue car'
i18n.t("car", { context: "blue", count: 2 }); // output: '2 blue cars'

<Trans i18nKey="some.key">Default text</Trans>;
