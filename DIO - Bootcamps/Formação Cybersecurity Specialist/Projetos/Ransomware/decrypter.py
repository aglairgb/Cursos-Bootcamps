# decrypter.py
from cryptography.fernet import Fernet
import os

def decrypt_file(input_file, key):
    with open(input_file, 'rb') as file:
        encrypted_data = file.read()

    cipher_suite = Fernet(key)
    decrypted_data = cipher_suite.decrypt(encrypted_data)

    # Renomeia o arquivo original para teste.txt
    os.rename(input_file, "teste.txt")

    with open("teste.txt", 'wb') as file:
        file.write(decrypted_data)

if __name__ == "__main__":
    input_filename = "conteudoCriptografado.txt"
    key = input("Digite a chave para descriptografar: ")

    decrypt_file(input_filename, key.encode())

    print(f"Conteúdo de {input_filename} descriptografado e salvo em teste.txt.")
