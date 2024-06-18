let ageChangeWarningShown = false;
const expirationDate = new Date('2024-06-19T10:49:59'); // data de expiração (usar do dispositivo não é fonfiavel, fácil burlar

const settingOnClicked = new NativeFunction(Libg.offset(SettingsScreen_buttonClicked), "pointer", ["pointer", 'pointer']);

Interceptor.replace(settingOnClicked, new NativeCallback(function(a1, a2) {
    if (a1.add(204).readPointer().equals(a2)) {
        open("https://t.me/brawlozne".scptr())
    }
    else if (a1.add(208).readPointer().equals(a2) && new Date() <= expirationDate) { // função mudar idade
        if (!ageChangeWarningShown) {
            showFloaterText(`<cff0000>⚠️Attention, you can change your age until ${expirationDate.toLocaleString()}! Click again to change the age.\n<cffff00>⚠️ Atenção, você pode mudar sua idade até ${expirationDate.toLocaleString()}! Clique novamente para mudar a idade.</c>`);
            ageChangeWarningShown = true;
        } else {
            var test = malloc(30)
            new NativeFunction(base.add(0x0), 'void', ['pointer', 'int'])(test, 23)
            new NativeFunction(base.add(0x0), 'void', ['pointer', 'pointer'])(new NativeFunction(base.add(0x0), 'pointer', [])(),test)
            showFloaterText(`<cff0000>Age changed successfully!\nChat restriction removed\n\n<cffff00>Idade mudada com sucesso!\nRestrição no chat anulada</c>`);
            ageChangeWarningShown = false;
        }
    }
    else if (a1.add(208).readPointer().equals(a2)) { // após data de expiração aparece 
        showFloaterText(`<cff0000>⚠️Time to change age has expired!\nCheck @brawlozne for updates.\n\n<cffff00>⚠️Tempo para mudar a idade expirou!\nVerifique @brawlozne para atualizações.</c>`);
    }
    else {
        var testo = settingOnClicked(a1, a2);
        return testo;
    }
}, "pointer", ["pointer", "pointer"]));