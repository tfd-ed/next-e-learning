import messagesKh from "./locales/kh-KH"
import messagesEn from "./locales/en-US"
export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        en: messagesEn,
        km: messagesKh
    }
}))
