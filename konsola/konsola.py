# Klasa: <Konsola>
# Opis: <Zwraca liczbe samogłąsek i lancuch bez powtórzeń >
# Metody: <nazwa1: policz_samogloski | zwraca liczbe samogłąsek znajdujących w parametrze, przez samogloski rozumie znaki "aąeęiouóyAĄEĘIOUÓY">
# Metody: <nazwa1: usun_powtorzenia | zwraca lancuch bez powtórzeń>
#Autor: <Danil Hurbskiy>




class Konsola:
    def policz_samogloski(self, lancuch):
        if lancuch is None or lancuch == "":
            return None
        
        samogloski = "aąeęiouóyAĄEĘIOUÓY"
        licznik = 0
        for znak in lancuch:
            if znak in samogloski:
                licznik += 1
        return licznik

    def usun_powtorzenia(self, lancuch):
        if lancuch is None or lancuch == "":
            return ""
        
        wynik = lancuch[0]
        for i in range(1, len(lancuch)):
            if lancuch[i] != lancuch[i - 1]:
                wynik += lancuch[i]
        return wynik
konsola = Konsola()



lancuch = "Abba;;;to zespół"
print(konsola.policz_samogloski(lancuch))
print(konsola.usun_powtorzenia(lancuch))
