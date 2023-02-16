export {};

/**
 * @description
 * расширение описания свойств в browser window с целью использования в настройках окружения
 */
declare global {
  interface Window {
    CKEDITOR_BASEPATH: string;
    env: {
      appPrefix: string;
      logoutUrl: string;
    };
  }
}
