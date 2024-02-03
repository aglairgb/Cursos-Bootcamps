# encrypter.py
from cryptography.fernet import Fernet
import os

def encrypt_file(input_file, key):
    with open(input_file, 'rb') as file:
        data = file.read()

    cipher_suite = Fernet(key)
    encrypted_data = cipher_suite.encrypt(data)

    # Renomeia o arquivo original para conteudoCriptografado.txt
    os.rename(input_file, "conteudoCriptografado.txt")

    with open("conteudoCriptografado.txt", 'wb') as file:
        file.write(encrypted_data)

if __name__ == "__main__":
    input_filename = "teste.txt"
    key = Fernet.generate_key()

    encrypt_file(input_filename, key)

    print(f"Conteúdo de {input_filename} criptografado e salvo em conteudoCriptografado.txt.")
    print(f"Chave utilizada: {key.decode()}")
