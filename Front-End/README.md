# Tarefandoo - TODO List
Descrição... API

## 1. Criando:
**No terminal:**
- [x] Criando o app: `npx create-expo-app churrasqueando`
- [x] Abrindo o diretório do arquivo: `cd churrasqueando`
- [x] Instalando dependências pro Expo: `npx expo install react-dom react-native-web @expo/webpack-config`
- [x] Para as áreas seguras: `npm install react-native-safe-area-context`
- [x] Fonte Karla: `npx expo install expo-font @expo-google-fonts/karla`
- [x] React Native Paper: `npm install react-native-paper`
- [x] Native Stack Navigator: `npm install @react-navigation/native-stack`

- [x] Rodando: `npx expo start` ou `npx expo start --tunnel`


React Navigation:
npm install @react-navigation/native

## 2. Estruturando os aqruivos:

### 2.1. Estruturação geral
**Dentro do diretório do app:**
- [x] Criar a pasta `src` 
- [x] Criar as pastas `assets`, `theme` e `screens` em `/src`:
```
├── src
    ├── assets
    ├── theme
    └── screens
```

### 2.2. Tema e assets
- [x] Colocar as imagens do projeto em `/assets` 

- [x] Criar um arquivo `index.js` em `/theme`:
```
├── theme
    └── index.js
```

- [x] Adicionar as cores, tamanhos e fonte do tema no `index.js`:
```js
export const theme = {
    colors: {
        wine_red: '#6A041D',
        marquis_orange: '#D27238',
        brown_yellow: '#DD9367',
        peach_nougat: '#E7B495',
        ginger_cream: '#F0E2D9',
        white: '#FFFFFF',
        chinese_black: '#141301',
    },
    font_family: {
        regular: 'Karla_400Regular'
    },
    font_size: {
        xl: 28,
        lg: 20,
        md: 16,
        sm: 14,
        xs: 12,
        xxs: 10,
    },
    spacing: {
        xl: 40,
        lg: 30,
        md: 20,
        sm: 10,
        xs: 5,
    },
    borderRadius: {
        button: 15,
        input: 25,
    }
}
```

### 2.3. Estruturação de telas
- [x] Criar as pastas `Loading`, `Inicio`, `Organizador`, `Acompanhamentos`, `Carnes`, `Bebidas` e `Resultados` para as telas em `/screens`: 
```
├── screens
    ├── Loading
    ├── Inicio
    ├── Organizador
    ├── Acompanhamentos
    ├── Carnes
    ├── Bebidas
    └── Resultados
```

- [x] Criar um arquivo `index.js` e `style.js` dentro da pasta de cada tela.



## 3. Navegação entre telas
`// App.js e criando as funções das telas`

## 4. Tela Loading

## 5. Tela Início

## 6. Tela Organizador