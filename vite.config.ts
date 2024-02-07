import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Путь к директории, в которой будут храниться собранные файлы
    assetsDir: '.', // Путь к директории, в которой будут храниться статические ресурсы
    sourcemap: true, // Генерировать ли карты исходного кода
    minify: 'terser', // Минификация JavaScript, 'terser' - использует Terser, 'esbuild' - использует esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Удаление консольных логов в продакшн сборке
      },
    },
  },
});
