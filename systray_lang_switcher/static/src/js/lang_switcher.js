/** @odoo-module **/

/*
 * ============================================================================
 * Module Name : Systray Language Switcher
 * Description : Quick language selector component for Odoo 20 Systray (Owl 3)
 * Author      : Tommy Tran
 * License     : LGPL-3
 * ============================================================================
 */
import { Component, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { user } from "@web/core/user";
import { useService } from "@web/core/utils/hooks";

export class LanguageSwitcher extends Component {
    static template = "quick_language_switcher.LanguageSwitcher";

    setup() {
        let currentLang = user.lang || "en_US";
        this.lang_code = currentLang.replace(/-/g, "_");
        this.orm = useService("orm");
        this.languages = [];

        onWillStart(async () => {
            await this.loadLanguages();
        });
    }

    async loadLanguages() {
        try {
            const result = await this.orm.searchRead(
                "res.lang",
                [["active", "=", true]],
                ["name", "code", "flag_image_url"],
                { order: "name" }
            );

            if (result && result.length > 0) {
                this.languages = result.map(lang => ({...lang, code: lang.code.replace(/-/g, "_")
                }));
            }
        } catch (error) {
            console.error("Error loading system languages:", error);
            this.languages = [];
        }
    }

    async onChangeLanguage(lang_code) {
        this.lang_code = lang_code;

        await this.orm.write(
            "res.users",
            [user.userId],
            { lang: lang_code }
        );

        window.location.reload();
    }
}

registry.category("systray").add(
    "quick_language_switcher.LanguageSwitcher",
    { Component: LanguageSwitcher },
    { sequence: 15 }
);