import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-app',
  //webDir: 'dist'
  // web bundle path    == pathTo "index.html"
  webDir: 'dist/angular-app/browser',
};

export default config;
