const recipes = [
    {
        "name": "Wachauer Weckerl",
        "description": "Traditionelles österreichisches Gebäck mit knuspriger Kruste und weicher Krume, hergestellt mit einem Poolish für intensiven Geschmack.",
        "parts": [
            {
                "name": "Poolish",
                "ingredients": [
                    "100 g Weizenmehl",
                    "100 g Wasser",
                    "0.15 g Frischhefe"
                ]
            },
            {
                "name": "Hauptteig",
                "ingredients": [
                    "150 g Weizenmehl",
                    "25 g Roggenmehl",
                    "90 g Wasser (lauwarm)",
                    "7.5 g Frischhefe",
                    "6 g Salz",
                    "5 g Butter",
                    "2 g Kümmel"
                ]
            }
        ],
        "steps": [
            "Poolish: Mehl, Wasser und Hefe glatt verrühren. 12–16 Stunden bei 20–24 °C abgedeckt ruhen lassen, bis es blubbert.",
            "Hauptteig: Poolish mit Weizenmehl, Roggenmehl, Wasser, Hefe, Salz, Malzmehl und Butter 8–10 Minuten zu einem glatten, elastischen Teig kneten.",
            "Teig 60 Minuten an einem warmen Ort (24–26 °C) gehen lassen, nach 30 Minuten einmal falten.",
            "Teig in 8–10 Stücke (80–100 g) teilen, rund schleifen, leicht länglich formen. Mit Schluss nach unten abgedeckt 30–40 Minuten gehen lassen.",
            "Ofen auf 230 °C (Ober-/Unterhitze) oder 210 °C (Umluft) mit Backblech/Stein vorheizen. Ofenfeste Schale für Wasser bereitstellen.",
            "Teiglinge mit Schluss nach oben auf heißes Blech legen, optional mit Kümmel, Mohn oder Sesam bestreuen, längs 0,5 cm tief einschneiden.",
            "Mit Dampf (Wasser in Schale gießen) 18–22 Minuten backen, nach 10 Minuten Dampf ablassen, bis Weckerl goldbraun sind.",
            "Auf Gitter auskühlen lassen."
        ]
    }, {
        "name": "Burger Brötchen",
        "description": "Weiche, selbstgebackene Burger Brötchen mit goldbrauner Kruste, perfekt für saftige Burger.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "500 g Weizenmehl",
                    "16 g Frischhefe",
                    "31 g Zucker",
                    "9 g Salz",
                    "41 g Butter (geschmolzen)",
                    "220 g Wasser (lauwarm)",
                    "1 Ei"
                ]
            }
        ],
        "steps": [
            "Alle Zutaten zu einem glatten Teig vermengen.",
            "Teig 10 Minuten kneten.",
            "Teig abgedeckt 2 Stunden gehen lassen, bis er sich verdoppelt.",
            "Teig in 8 gleich große Stücke teilen und zu Kugeln formen.",
            "Kugeln auf ein Backblech legen, abdecken und 1 Stunde gehen lassen.",
            "Brötchen mit verquirltem Ei bestreichen.",
            "Bei 220 °C 20 Minuten backen, bis goldbraun."
        ]
    }, {
        "name": "Panna Cotta",
        "description": "Cremige Panna Cotta mit Vanille und einer frischen Erdbeersoße.",
        "parts": [
            {
                "name": "Panna Cotta",
                "ingredients": [
                    "500 g Schlagobers",
                    "90 g Zucker",
                    "5 g Vanilleextrakt",
                    "5 Blätter Gelatine oder 4.5g Pulver"
                ]
            },
            {
                "name": "Erdbeersoße",
                "ingredients": [
                    "250 g Erdbeeren",
                    "30 g Zucker",
                    "5 g Zitronensaft (optional)"
                ]
            }
        ],
        "steps": [
            "Schlagobers auf niedriger bis mittlerer Hitze erhitzen, rühren, bis Blasen an den Rändern entstehen.",
            "Gelatine in kaltem Wasser einweichen.",
            "Vanilleextrakt und Zucker ins Schlagobers rühren.",
            "Gelatine ausdrücken, einrühren, bis sie sich auflöst.",
            "Masse in 6 Gläser füllen, abdecken und im Kühlschrank fest werden lassen.",
            "Erdbeeren, Zucker und optional Zitronensaft aufkochen.",
            "Erdbeermischung pürieren und über die feste Panna Cotta geben."
        ]
    }, {
        "name": "Schottische Butter-Kekse",
        "description": "Knusprige, buttrige Kekse mit braunem Zucker und einem Hauch Vanille.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "250 g Butter",
                    "200 g brauner Zucker",
                    "8 g Vanillezucker",
                    "375 g Weizenmehl",
                    "1 g Salz"
                ]
            }
        ],
        "steps": [
            "Alle Zutaten zu einem glatten Teig vermengen.",
            "Teig zu einer Rolle formen und 1 Stunde im Kühlschrank kühlen.",
            "Rolle in 5 mm dicke Scheiben schneiden.",
            "Bei 200 °C mindestens 12 Minuten backen, bis goldbraun."
        ]
    }, {
        "name": "Granola",
        "description": "Knuspriges Granola mit Haferflocken, Honig und Kokosfett, optional mit Zimt verfeinert.",
        "parts": [
            {
                "name": "Granola",
                "ingredients": [
                    "75 g Haferflocken (zerkleinert)",
                    "75 g Haferflocken (ganz)",
                    "30 g Honig",
                    "2 TL Zucker",
                    "1 EL Kokosfett",
                    "2 EL Wasser",
                    "0.25 TL Salz",
                    "1 g Vanilleextrakt",
                    "etwas Zimt (optional)",
                    "4 TL Kakaopulver (optional)"
                ]
            }
        ],
        "steps": [
            "Honig, Wasser, Kokosfett, Salz, Zucker und Vanilleextrakt bei niedriger Hitze verrühren, bis alles gelöst ist.",
            "Mit zerkleinerten und ganzen Haferflocken vermengen.",
            "Auf ein Backblech verteilen und bei 140 °C mindestens 40 Minuten backen, bis goldbraun, zwischendurch umrühren.",
            "Komplett auskühlen lassen, bevor es verpackt wird."
        ]
    }, {
        "name": "Pavlova",
        "description": "Luftige Meringue mit Schlagsahne und frischen roten Johannisbeeren, mit reduziertem Zuckergehalt für eine leichtere Süße.",
        "parts": [
            {
                "name": "Meringue-Basis",
                "ingredients": [
                    "3 große Eiweiße (Zimmertemperatur, ohne Eigelb)",
                    "100g Zucker (feinkörnig bevorzugt)",
                    "5g Zitronensaft (frisch gepresst)",
                    "4g Speisestärke",
                    "2g Vanilleextrakt (optional)"
                ]
            },
            {
                "name": "Schlagsahne",
                "ingredients": [
                    "240g Sahne (kalt)",
                    "10g Puderzucker",
                    "2g Vanilleextrakt"
                ]
            },
            {
                "name": "Belag",
                "ingredients": [
                    "100g frische rote Johannisbeeren",
                    "Einige Minzblätter (optional, zum Garnieren)"
                ]
            }
        ],
        "steps": [
            "Backofen auf 120°C vorheizen. Backblech mit Backpapier auslegen, einen 15-18 cm Kreis aufzeichnen und umdrehen.",
            "Eiweiße in einer sauberen Schüssel bei mittlerer Geschwindigkeit zu weichem Schaum schlagen (2-3 Minuten).",
            "Nach und nach 100g Zucker einrieseln lassen, auf hoher Stufe schlagen, bis steife, glänzende Spitzen entstehen (ca. 5 Minuten).",
            "Zitronensaft, Speisestärke und Vanilleextrakt vorsichtig unterheben.",
            "Meringue auf den Kreis geben, zu einem 15-18 cm Diskus formen mit einer Mulde in der Mitte.",
            "1 Stunde bis 1 Stunde 15 Minuten backen, bis außen knusprig und leicht golden. Im Ofen mit leicht geöffneter Tür 1-2 Stunden abkühlen lassen.",
            "Sahne, Puderzucker und Vanilleextrakt zu weichen Spitzen schlagen (2-3 Minuten).",
            "Abgekühlte Meringue auf eine Platte legen, Schlagsahne in die Mulde streichen, Johannisbeeren darüberstreuen. Optional mit Minzblättern garnieren."
        ]
    }, {
        "name": "Toastbrot",
        "description": "Weiches, selbstgebackenes Toastbrot mit optionaler Honig-Milch-Kruste für zusätzlichen Geschmack.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "400 g Mehl",
                    "225 g Wasser",
                    "20 g Butter/Öl",
                    "40 g Milch",
                    "8 g Zucker",
                    "8 g Salz",
                    "16 g Frischhefe"
                ]
            },
            {
                "name": "Optionale Kruste",
                "ingredients": [
                    "15 g Honig",
                    "15 g Milch"
                ]
            }
        ],
        "steps": [
            "Alle Teigzutaten vermengen und 1 Stunde abgedeckt ruhen lassen.",
            "Teig falten und weitere 1 Stunde ruhen lassen.",
            "Teig rollen und in eine gefettete Kastenform geben.",
            "Optional: Teig und Form mit Honig-Milch-Mischung bestreichen.",
            "1 Stunde abgedeckt ruhen lassen, Ofen auf 180 °C vorheizen.",
            "40 Minuten backen, optional weitere 5 Minuten ohne Form für eine knusprige Kruste."
        ]
    }, {
        "name": "Originale Lasagne",
        "description": "Hausgemachte Lasagne mit frischen Spinatnudeln, herzhaftem Bolognese-Ragù, cremiger Béchamelsoße und Parmigiano Reggiano.",
        "parts": [
            {
                "name": "Spinatnudeln",
                "ingredients": [
                    "100 g frischer Spinat",
                    "500 g Weizenmehl",
                    "4 Eier",
                    "1 g Salz"
                ]
            },
            {
                "name": "Bolognese-Ragù",
                "ingredients": [
                    "500 g Schweinehackfleisch",
                    "500 g Rinderhackfleisch",
                    "100 g Pancetta",
                    "1 Zwiebel",
                    "2 Stangen Sellerie",
                    "3 Karotten",
                    "700 g Passata",
                    "100 g Tomatenmark",
                    "400 g geschälte Tomaten",
                    "200 g Rot- oder Weißwein",
                    "200 g Vollmilch (optional)",
                    "50 g Olivenöl",
                    "Salz und Pfeffer nach Geschmack"
                ]
            },
            {
                "name": "Béchamelsoße",
                "ingredients": [
                    "500 g Milch",
                    "50 g Weizenmehl",
                    "50 g Butter",
                    "1 g Muskatnuss"
                ]
            },
            {
                "name": "Topping",
                "ingredients": [
                    "Parmigiano Reggiano"
                ]
            }
        ],
        "steps": [
            "Spinat mit einer Prise Salz in einer Pfanne 30 Sekunden anbraten, bis er zusammenfällt.",
            "Spinat mit Eiern in einem Mixer zu einer glatten Masse pürieren.",
            "Mehl auf eine Arbeitsfläche geben, eine Mulde formen, Spinat-Ei-Mischung hineingeben und Mehl einarbeiten. 10-15 Minuten zu einem glatten Teig kneten. In Frischhaltefolie wickeln und 30 Minuten im Kühlschrank ruhen lassen.",
            "Teig portionieren, mit Mehl bestäuben und durch eine Nudelmaschine rollen, beginnend bei der breitesten Stufe. 2-3 Mal falten und rollen, dann bis Stufe 5 dünner ausrollen. Zu Lasagneplatten schneiden, die zur Auflaufform passen.",
            "Platten auf ein Tuch legen, leicht mit Mehl bestäuben und abdecken, um Austrocknen zu verhindern.",
            "Für Bolognese-Ragù: Olivenöl erhitzen, Pancetta, Zwiebel, Sellerie und Karotten anbraten. Hackfleisch hinzufügen, anbraten, dann mit Wein ablöschen. Passata, Tomatenmark und geschälte Tomaten einrühren. Bei niedriger Hitze 2 Stunden köcheln lassen, optional Milch hinzufügen. Mit Salz und Pfeffer abschmecken.",
            "Für Béchamelsoße: Butter schmelzen, Mehl einrühren und kurz anschwitzen. Milch langsam unter Rühren zugießen, aufkochen, bis sie eindickt. Mit Muskatnuss würzen.",
            "Auflaufform leicht ölen, mit Béchamelsoße beginnen, dann abwechselnd Nudelplatten, Ragù, Béchamelsoße und Parmigiano Reggiano schichten. Mit Käse abschließen.",
            "Bei 180 °C 30-35 Minuten backen, bis die Oberfläche goldbraun ist. Vor dem Servieren 10 Minuten ruhen lassen."
        ]
    }, {
        "name": "Ramen-Nudeln",
        "description": "Hausgemachte Ramen-Nudeln",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "175-200 g Wasser",
                    "1 Ei (optional, vom Wasser-Gewicht abziehen)",
                    "5 g Salz",
                    "5 g Natriumkarbonat",
                    "500 g Weizenmehl"
                ]
            }
        ],
        "steps": [
            "Salz und Natriumkarbonat im Wasser auflösen, um Kansui herzustellen.",
            "Kansui sehr langsam zum Mehl geben, um gleichmäßig zu hydratisieren.",
            "Teig in einer Plastiktüte 30 Minuten ruhen lassen.",
            "Teig in der Tüte zu einer flachen Platte drücken.",
            "Weitere 30 Minuten ruhen lassen.",
            "Mit Atlas 150 bis Einstellung 5-7 ausrollen, je nach gewünschter Dicke.",
            "Nudeln 1 Tag im Kühlschrank ruhen lassen, dann verwenden oder einfrieren."
        ]
    }, {
        "name": "Ajitama-Marinade",
        "description": "Würzige Marinade für weichgekochte Eier, perfekt als Beilage für Ramen.",
        "parts": [
            {
                "name": "Marinade",
                "ingredients": [
                    "120 g Wasser",
                    "2 EL Sake",
                    "2 EL Mirin",
                    "2 EL Sojasauce",
                    "2 Eier"
                ]
            }
        ],
        "steps": [
            "Eier 6 Minuten in kochendem Wasser garen, dann sofort in ein Eisbad geben. Nach dem Abkühlen vorsichtig schälen.",
            "Wasser, Sake, Mirin und Sojasauce in einem Topf bei mittlerer Hitze aufkochen, rühren und auf Raumtemperatur abkühlen lassen.",
            "Geschälte Eier in einen verschließbaren Beutel oder Behälter geben, Marinade darüber gießen, sodass die Eier vollständig bedeckt sind. Verschließen und 12–24 Stunden im Kühlschrank marinieren.",
            "Eier aus der Marinade nehmen, halbieren und mit Ramen servieren. Marinade innerhalb von 3 Tagen verbrauchen oder entsorgen."
        ]
    }, {
        "name": "Bosna-Sauce",
        "description": "Würzige Sauce mit Senf, Ketchup und Curry, ideal für gegrillte Bratwurst im Weißbrot.",
        "parts": [
            {
                "name": "Sauce",
                "ingredients": [
                    "60 g scharfer Senf",
                    "60 g Ketchup",
                    "50 g Zwiebel (fein gehackt)",
                    "4 g Currypulver",
                    "4 g Paprikapulver (edelsüß)",
                    "2 g Cayennepfeffer (optional)",
                    "5 g Weißweinessig",
                    "5 g Honig",
                    "30 g Wasser (nach Bedarf)",
                    "10 g Petersilie (fein gehackt, optional)",
                    "Salz und Pfeffer nach Geschmack"
                ]
            }
        ],
        "steps": [
            "Zwiebel sehr fein hacken oder reiben.",
            "Senf, Ketchup, Currypulver, Paprikapulver und optional Cayennepfeffer in einer Schüssel vermengen.",
            "Essig und Honig einrühren, bei Bedarf Wasser hinzufügen, um die Konsistenz anzupassen.",
            "Zwiebeln und optional Petersilie unterheben, mit Salz und Pfeffer abschmecken.",
            "Sauce 10–15 Minuten ruhen lassen, für intensiveren Geschmack über Nacht kühlen.",
            "Über gegrillte Bratwurst im Weißbrot geben, optional mit Zwiebeln oder Petersilie garnieren."
        ]
    }, {
        "name": "Pizzateig",
        "description": "Ein klassischer Pizzateig mit langer Ruhezeit für optimale Geschmacksentwicklung.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "140 g Mehl",
                    "90 g Wasser",
                    "4 g Salz",
                    "0.1 g frische Hefe",
                    "4 g Zucker (optional)",
                    "4 g Olivenöl (optional)"
                ]
            }
        ],
        "steps": [
            "Mehl, Wasser, Salz, Hefe, Zucker und Olivenöl (falls verwendet) zu einem glatten Teig verkneten.",
            "Teig abdecken und 24 Stunden bei Zimmertemperatur ruhen lassen.",
            "Teig ausrollen, belegen und nach Wunsch backen."
        ]
    }, {
        "name": "Palatschinken",
        "description": "Dünne österreichische Pfannkuchen, vielseitig als süße oder herzhafte Speise.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "1 Ei",
                    "100 g Mehl",
                    "230 g Milch",
                    "1 g Salz"
                ]
            }
        ],
        "steps": [
            "Ei, Mehl, Milch und Salz zu einem glatten Teig verrühren.",
            "Pfanne mit Öl auf hoher Stufe erhitzen.",
            "Dünne Schicht Teig in die Pfanne geben und beidseitig goldbraun backen.",
            "Palatschinken nach Belieben füllen oder servieren."
        ]
    }, {
        "name": "Frittaten",
        "description": "Dünne österreichische Pfannkuchen, ideal als Suppeneinlage oder Beilage.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "2 Eier",
                    "80 g Mehl",
                    "125 g Milch",
                    "1 g Salz"
                ]
            }
        ],
        "steps": [
            "Eier, Mehl, Milch und Salz zu einem glatten Teig verrühren.",
            "Pfanne mit Öl auf mittel-hoher Stufe erhitzen.",
            "Dünne Schicht Teig in die Pfanne geben und beidseitig goldbraun backen.",
            "Frittaten in Streifen schneiden und servieren."
        ]
    }, {
        "name": "Schoko-Küchlein",
        "description": "Kleine Schokoladenkuchen mit flüssigem Kern, perfekt für Dessertliebhaber.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "50 g Kuvertüre",
                    "30 g Butter",
                    "1 Ei",
                    "10 g Zucker",
                    "1 g Salz",
                    "5 g Vanilleextrakt",
                    "20 g Mehl",
                    "10 g Kakaopulver (ungesüßt)"
                ]
            }
        ],
        "steps": [
            "Butter und Kuvertüre über einem Wasserbad schmelzen.",
            "Ei, Zucker, Salz und Vanilleextrakt einrühren, Mehl und Kakaopulver zuletzt unterheben.",
            "Teig in gefettete Förmchen füllen.",
            "Bei 190 °C (Ober-/Unterhitze) 10 Minuten backen.",
            "Küchlein 2 Minuten abkühlen, vorsichtig aus den Förmchen nehmen und sofort servieren."
        ]
    }, {
        "name": "Mohnkuchen",
        "description": "Ein saftiger Mohnkuchen mit Apfel und Zitronenschale, optional mit Zuckerglasur.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "1 großer Apfel (gerieben)",
                    "1 Becher Naturjoghurt",
                    "1/2 Becher Zucker",
                    "1/2 Becher Öl",
                    "1 Becher Mehl",
                    "200 g Mohn",
                    "4 Eier",
                    "1 Packung Vanillezucker",
                    "1 Packung Backpulver",
                    "1 g Zimt",
                    "1 Zitrone, Schale"
                ]
            }, {
                "name": "Glasur",
                "ingredients": [
                    "Puderzucker",
                    "1 Zitrone, Saft"
                ]
            }
        ],
        "steps": [
            "Eier trennen, Eiweiß steif schlagen.",
            "Alle Zutaten (außer Eiweiß) vermischen, Eischnee vorsichtig unterheben.",
            "Teig in eine gefettete Kuchenform geben.",
            "Bei 180 °C (Ober-/Unterhitze) 50 Minuten auf mittlerer Schiene backen, Stäbchenprobe durchführen.",
            "Kuchen 10 Minuten abkühlen, dann aus der Form nehmen."
        ]
    }, {
        "name": "Kaiserschmarrn",
        "description": "Ein fluffiger österreichischer Kaiserschmarrn, goldbraun gebraten und in kleine Stücke gerissen.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "250 g Milch",
                    "125 g Schlagobers",
                    "120 g Mehl",
                    "70 g Zucker",
                    "3 Eier",
                    "5 g Vanilleextrakt",
                    "1 g Salz"
                ]
            }
        ],
        "steps": [
            "Milch, Schlagobers, Mehl, Zucker, Vanilleextrakt, Salz und Eigelb verrühren.",
            "Eiweiß steif schlagen und vorsichtig unter die Masse heben.",
            "Öl/Butter in einer großen Pfanne erhitzen, Teig einfüllen, auf mittel-niedriger Stufe backen.",
            "Wenn ein süßlicher Duft aufsteigt, Teig vierteln und wenden.",
            "Sobald die Masse fest ist, in kleine Stücke reißen und goldbraun braten.",
            "Sofort servieren, optional mit Puderzucker bestreuen."
        ]
    }, {
        "name": "Erdbeerknödel",
        "description": "Luftige Topfenknödel mit frischen Erdbeeren, serviert mit gerösteten Butterbröseln.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "250 g Topfen",
                    "1 Ei",
                    "125 g Mehl",
                    "25 g Grieß",
                    "1 g Salz"
                ]
            },
            {
                "name": "Füllung und Topping",
                "ingredients": [
                    "10 Erdbeeren",
                    "80 g Butter",
                    "150 g Semmelbrösel",
                    "2 EL Zucker",
                    "1 g Zimt (optional)"
                ]
            }
        ],
        "steps": [
            "Topfen, Ei, Mehl, Grieß und Salz zu einem glatten Teig verkneten.",
            "Mit bemehlten Händen je eine Erdbeere mit Teig dünn umhüllen.",
            "Knödel in einem weiten Topf mit leicht gesalzenem Wasser 10 Minuten sanft köcheln lassen.",
            "Butter in einer Pfanne schmelzen, Semmelbrösel mit Zucker und Zimt darin goldbraun rösten.",
            "Knödel abtropfen lassen und in den Butterbröseln wälzen.",
            "Sofort servieren."
        ]
    }, {
        "name": "Apfelkuchen",
        "description": "Ein klassischer Apfelkuchen mit Mürbeteig und gewürzter Apfelfüllung, gebacken in einer Kuchenform.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "230 g Mehl",
                    "60 g Butter",
                    "60 g Joghurt",
                    "40 g Zucker",
                    "2 g Backpulver",
                    "1 Ei"
                ]
            },
            {
                "name": "Füllung",
                "ingredients": [
                    "5 Äpfel",
                    "5 g Vanilleextrakt",
                    "1 g Zimt",
                    "1 g Zucker",
                    "1 Zitrone (Saft)"
                ]
            }
        ],
        "steps": [
            "Mehl, Butter, Joghurt, Zucker, Backpulver und Ei zu einem Teig verkneten.",
            "3/4 des Teigs ausrollen und in eine Kuchenform legen.",
            "Restlichen Teig in Folie wickeln und beides 1 Stunde kühlen.",
            "Äpfel schälen, in Stücke schneiden, mit Vanilleextrakt, Zimt, Zucker und Zitronensaft 5 Minuten dünsten.",
            "Restlichen Teig ausrollen, in Streifen schneiden.",
            "Äpfel in die Kuchenform geben, Teigstreifen gitterförmig darauflegen und am Rand festdrücken.",
            "Bei 200 °C (Ober-/Unterhitze) 35–40 Minuten backen, Stäbchenprobe durchführen.",
            "Kuchen 10 Minuten abkühlen, dann aus der Form nehmen."
        ]
    }, {
        "name": "Tiramisu",
        "description": "Ein klassisches italienisches Tiramisu mit Mascarpone und Espresso-getränkten Biskotten.",
        "parts": [
            {
                "name": "Creme und Schichtung",
                "ingredients": [
                    "2 Tassen Espresso",
                    "250 g Mascarpone",
                    "2 Eier",
                    "30 g Zucker",
                    "12 Biskotten",
                    "10 g Kakaopulver (ungesüßt)"
                ]
            }
        ],
        "steps": [
            "Eier trennen, je 15 g Zucker zu Eigelb und Eiweiß geben und beides schaumig schlagen.",
            "Je 125 g Mascarpone in Eigelb- und Eiweißmischung einrühren.",
            "Biskotten kurz (1 Sekunde pro Seite) in Espresso tauchen und in eine Form schichten.",
            "Eigelb-Mascarpone-Mischung auf die Biskotten schichten, mit Kakaopulver bestreuen.",
            "Zweite Lage Biskotten darauflegen, Eiweiß-Mascarpone-Mischung darübergeben, erneut mit Kakaopulver bestreuen.",
            "Mindestens 2 Stunden kühlen, bevor es serviert wird."
        ]
    }, {
        "name": "Marmorkuchen",
        "description": "Ein einfacher Marmorkuchen mit hellem und dunklem Teig, gebacken in einer Kastenform.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "100 g Butter",
                    "80 g Zucker",
                    "5 g Vanilleextrakt",
                    "1 g Zitronenschale",
                    "3 Eigelb",
                    "3 Eiweiß",
                    "1 g Salz",
                    "60 g Zucker",
                    "140 g Mehl",
                    "4 g Backpulver",
                    "50 g Milch",
                    "10 g Kakaopulver (ungesüßt)"
                ]
            }
        ],
        "steps": [
            "Butter, Zucker, Vanilleextrakt, Zitronenschale und Eigelb verrühren.",
            "Eiweiß mit Salz und Zucker zu Eischnee schlagen.",
            "Mehl mit Backpulver mischen, Milch leicht erwärmen.",
            "Abwechselnd Mehl, Milch und Eischnee in die Buttermasse einrühren.",
            "Kuchenform mit Fett ausstreichen und mit Mehl bestäuben, die Hälfte des Teigs einfüllen.",
            "Restlichen Teig mit Kakaopulver mischen und in die Form geben.",
            "Bei 180 °C (Ober-/Unterhitze) 60 Minuten backen, Stäbchenprobe durchführen.",
            "Kuchen 10 Minuten in der Form abkühlen, dann herausnehmen und vollständig abkühlen."
        ]
    }, {
        "name": "Sauerteigbrot",
        "description": "Ein klassisches Sauerteigbrot mit knuspriger Kruste und luftiger Krume.",
        "parts": [
            {
                "name": "75g Aktivierter Sauerteig (10-20%)",
                "ingredients": [
                    "25g Sauerteig-Starter",
                    "25g Wasser",
                    "25g Mehl"
                ]
            },
            {
                "name": "Hauptteig",
                "ingredients": [
                    "500g Mehl",
                    "375g Wasser (70-80%)",
                    "12g Salz (2-3%)"
                ]
            }
        ],
        "steps": [
            "Sauerteig-Starter mit 25g Mehl und 25g Wasser mischen, 4 Stunden ruhen lassen, bis das Volumen verdoppelt ist.",
            "Hauptteig-Zutaten mit aktiviertem Sauerteig grob vermengen.",
            "Teig 10 Minuten ruhen lassen, dann mehrmals falten (slap and fold).",
            "Teig 30 Minuten ruhen lassen, vorsichtig falten, diesen Schritt wiederholen.",
            "Teig 4 Stunden ruhen lassen, bis das Volumen verdoppelt ist.",
            "Teig formen, im Gärkörbchen 4 Stunden ruhen lassen, bis das Volumen verdoppelt ist.",
            "Im vorgeheizten Ofen im Dutch Oven 20 Minuten mit Deckel und 20 Minuten ohne Deckel bei 230°C backen."
        ]
    }, {
        "name": "Rustikales Brot",
        "description": "Ein herzhaftes Brot mit knuspriger Kruste und lockerer Krume, dank Poolish-Vorteig besonders aromatisch.",
        "parts": [
            {
                "name": "Poolish",
                "ingredients": [
                    "100g Mehl",
                    "100g Wasser",
                    "0.15g frische Hefe"
                ]
            },
            {
                "name": "Hauptteig",
                "ingredients": [
                    "125g Mehl",
                    "25g Vollkornmehl",
                    "7.5g frische Hefe (3%)",
                    "6g Salz (2-3%)",
                    "100g Wasser (70-80%)"
                ]
            }
        ],
        "steps": [
            "Poolish-Zutaten mischen und 12 Stunden ruhen lassen.",
            "Poolish mit Hauptteig-Zutaten vermengen.",
            "Teig 30 Minuten ruhen lassen, dann falten.",
            "Schritt 3 wiederholen, dann 1 Stunde ruhen lassen.",
            "Teig formen und im Gärkörbchen 1 Stunde gehen lassen.",
            "Brot im vorgeheizten Ofen bei 250°C im Dutch Oven 20 Minuten mit Deckel und 20 Minuten ohne Deckel backen."
        ]
    }, {
        "name": "Blaubeer-Pfannkuchen",
        "description": "Luftige Pfannkuchen mit frischen Blaubeeren, perfekt für ein Frühstück oder einen Brunch.",
        "parts": [
            {
                "name": "Trockene Zutaten",
                "ingredients": [
                    "90g Mehl",
                    "12g Zucker",
                    "4g Backpulver",
                    "1g Natron",
                    "0.5g Salz"
                ]
            },
            {
                "name": "Flüssige Zutaten",
                "ingredients": [
                    "120g Milch",
                    "1 großes Ei",
                    "15g geschmolzene Butter",
                    "2g Vanilleextrakt"
                ]
            },
            {
                "name": "Zusätzliche Zutaten",
                "ingredients": [
                    "75g frische Blaubeeren"
                ]
            }
        ],
        "steps": [
            "Mehl, Zucker, Backpulver, Natron und Salz in einer Schüssel vermischen.",
            "Milch, Ei, geschmolzene Butter und Vanilleextrakt in einer separaten Schüssel glatt rühren.",
            "Flüssige Zutaten zu den trockenen geben und vorsichtig mischen, bis sie gerade so verbunden sind (Klümpchen sind in Ordnung).",
            "Blaubeeren vorsichtig unterheben.",
            "Eine beschichtete Pfanne bei mittlerer Hitze leicht mit Butter oder Olivenöl einfetten.",
            "Je 60g Teig pro Pfannkuchen in die Pfanne geben. Backen, bis Blasen an der Oberfläche erscheinen und die Ränder fest sind (ca. 2-3 Minuten). Wenden und 1-2 Minuten weiterbacken, bis sie goldbraun sind."
        ]
    }, {
        "name": "Oreo-Style Schoko-Waffeln",
        "description": "Dünne, knusprige, intensiv schokoladige Waffeln wie Oreo.",
        "parts": [
            {
                "name": "Teig",
                "ingredients": [
                    "125 g Weizenmehl",
                    "50 g ungesüßtes Kakaopulver",
                    "0.5 TL Natron",
                    "0.25 TL Salz",
                    "110 g weiche Butter Butter",
                    "110 g Zucker",
                    "1 großes Ei",
                    "1 TL Vanilleextrakt (optional)"
                ]
            }
        ],
        "steps": [
            "Backofen auf 175 °C Ober-/Unterhitze vorheizen. Zwei Bleche mit Backpapier belegen.",
            "Mehl, Kakao, Natron und Salz in einer Schüssel vermischen.",
            "Butter und Zucker 1–2 Min. cremig rühren (Handmixer oder kräftig von Hand).",
            "Ei und Vanille unterrühren.",
            "Trockene Zutaten auf einmal dazugeben und nur so lange rühren, bis ein weicher, fast brownieartiger Teig entsteht.",
            "Mit einem Teelöffel kleine Portionen abstechen, zu Kugeln rollen und mit 5 cm Abstand aufs Blech setzen.",
            "Jede Kugel leicht flach drücken (ca. 2–3 mm dick – je dünner, desto knuspriger).",
            "8–10 Min. backen. Die Kekse wirken noch weich – das ist richtig. Sie werden beim Abkühlen hart und knusprig.",
            "2 Min. auf dem Blech abkühlen lassen, dann komplett auf einem Gitter oder der Arbeitsplatte auskühlen lassen."
        ]
    }
];