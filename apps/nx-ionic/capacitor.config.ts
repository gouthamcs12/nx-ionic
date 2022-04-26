import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nx-ionic',
  webDir: '../../dist/apps/nx-ionic',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.4:4200/',
    cleartext: true
  }
};

export default config;
