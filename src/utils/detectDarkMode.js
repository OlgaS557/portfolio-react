//1. Проверка темной темы на уровне системных настроек
//(Пуск >Параметры . Выберите Персонализация > Цвета. В списке Выберите режим приложения Темный)

const detectDarkMode = () => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';       
    } 
    return 'light';    
}

export default detectDarkMode;