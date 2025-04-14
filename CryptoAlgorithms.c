#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

// Function to find modular inverse (used in Affine and Hill Ciphers)
int modInverse(int a, int m) {
    a = a % m;
    for (int x = 1; x < m; x++) {
        if ((a * x) % m == 1) {
            return x;
        }
    }
    return -1;
}

// Normalize character to 0-25
int charToIndex(char c) {
    return toupper(c) - 'A';
}

// Convert index to character, preserving case
char indexToChar(int i, int isUpper) {
    return isUpper ? ('A' + i) : ('a' + i);
}

// Atbash Cipher
void atbashCipher() {
    char text[1000];
    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            if (isupper(text[i])) {
                text[i] = 'Z' - (text[i] - 'A');
            } else {
                text[i] = 'z' - (text[i] - 'a');
            }
        }
    }
    printf("Atbash Cipher Output: %s", text);
}

// Caesar Cipher
void caesarCipher() {
    char text[1000];
    int shift = 3;
    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((text[i] - base + shift) % 26) + base;
        }
    }
    printf("Caesar Cipher Output: %s", text);
}

// August Cipher
void augustCipher() {
    char text[1000];
    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((text[i] - base + 1) % 26) + base;
        }
    }
    printf("August Cipher Output: %s", text);
}

// Affine Cipher
void affineCipher() {
    char text[1000];
    int a, b;
    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter values for a and b (Key): ");
    scanf("%d %d", &a, &b);
    getchar(); // Clear buffer

    // Check if 'a' is coprime with 26
    if (modInverse(a, 26) == -1) {
        printf("Invalid 'a' value! It must be coprime with 26.\n");
        return;
    }

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((a * (text[i] - base) + b) % 26) + base;
        }
    }
    printf("Affine Cipher Output: %s", text);
}

// Vigenere Cipher
void vigenereCipher() {
    char text[1000], key[100];
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter key (alphabetic only): ");
    fgets(key, sizeof(key), stdin);

    int keyLen = strlen(key) - 1; // Exclude newline
    int k = 0;

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            int shift = charToIndex(key[k % keyLen]);
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((text[i] - base + shift) % 26) + base;
            k++;
        }
    }
    printf("Vigenere Cipher Output: %s", text);
}

// Gronsfeld Cipher
void gronsfeldCipher() {
    char text[1000], key[100];
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter key (digits only): ");
    fgets(key, sizeof(key), stdin);

    int keyLen = strlen(key) - 1; // Exclude newline
    int k = 0;

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i]) && isdigit(key[k % keyLen])) {
            int shift = key[k % keyLen] - '0';
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((text[i] - base + shift) % 26) + base;
            k++;
        }
    }
    printf("Gronsfeld Cipher Output: %s", text);
}

// Beaufort Cipher
void beaufortCipher() {
    char text[1000], key[100];
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter key (alphabetic): ");
    fgets(key, sizeof(key), stdin);

    int keyLen = strlen(key) - 1; // Exclude newline
    int k = 0;

    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            int p = charToIndex(text[i]);
            int kidx = charToIndex(key[k % keyLen]);
            int cipher = (26 + kidx - p) % 26;
            text[i] = isupper(text[i]) ? ('A' + cipher) : ('a' + cipher);
            k++;
        }
    }
    printf("Beaufort Cipher Output: %s", text);
}

// Autokey Cipher
void autokeyCipher() {
    char text[1000], key[100];
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter key (alphabetic): ");
    fgets(key, sizeof(key), stdin);

    int klen = strlen(key) - 1; // Exclude newline
    char extendedKey[1000];
    strncpy(extendedKey, key, klen);
    extendedKey[klen] = '\0';

    // Extend key with plaintext
    int extIndex = klen;
    for (int i = 0; text[i] != '\0' && extIndex < sizeof(extendedKey) - 1; i++) {
        if (isalpha(text[i])) {
            extendedKey[extIndex++] = text[i];
        }
    }
    extendedKey[extIndex] = '\0';

    int k = 0;
    for (int i = 0; text[i] != '\0'; i++) {
        if (isalpha(text[i])) {
            int shift = charToIndex(extendedKey[k]);
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((text[i] - base + shift) % 26) + base;
            k++;
        }
    }
    printf("Autokey Cipher Output: %s", text);
}

// Running Key Cipher
void runningKeyCipher() {
    char text[1000], key[1000];
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter running key text (same or longer): ");
    fgets(key, sizeof(key), stdin);

    int k = 0;
    for (int i = 0; text[i] != '\0' && key[k] != '\0'; i++) {
        if (isalpha(text[i])) {
            while (key[k] != '\0' && !isalpha(key[k])) k++; // Skip non-alpha
            if (key[k] == '\0') break;
            int shift = charToIndex(key[k]);
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = ((text[i] - base + shift) % 26) + base;
            k++;
        }
    }
    printf("Running Key Cipher Output: %s", text);
}

// Hill Cipher
int determinant(int a, int b, int c, int d) {
    return (a * d - b * c) % 26;
}

void hillCipher() {
    char text[1000];
    int key[2][2];
    printf("Enter plaintext (alphabetic only, even length): ");
    fgets(text, sizeof(text), stdin);
    printf("Enter 2x2 key matrix (4 numbers, e.g., 3 5 2 7): ");
    scanf("%d %d %d %d", &key[0][0], &key[0][1], &key[1][0], &key[1][1]);
    getchar(); // Clear buffer

    // Check determinant
    int det = determinant(key[0][0], key[0][1], key[1][0], key[1][1]);
    if (det < 0) det += 26;
    if (modInverse(det, 26) == -1) {
        printf("Invalid key! Determinant must be coprime with 26.\n");
        return;
    }

    // Process text in pairs
    int len = strlen(text) - 1; // Exclude newline
    for (int i = 0; i < len - 1; i += 2) {
        if (isalpha(text[i]) && isalpha(text[i + 1])) {
            int p1 = toupper(text[i]) - 'A';
            int p2 = toupper(text[i + 1]) - 'A';
            int c1 = (key[0][0] * p1 + key[0][1] * p2) % 26;
            int c2 = (key[1][0] * p1 + key[1][1] * p2) % 26;
            text[i] = (isupper(text[i]) ? 'A' : 'a') + c1;
            text[i + 1] = (isupper(text[i + 1]) ? 'A' : 'a') + c2;
        }
    }
    printf("Hill Cipher Output: %s", text);
}

// Rail Fence Cipher
void railFenceCipher() {
    char text[1000], output[1000];
    int rails;
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter number of rails: ");
    scanf("%d", &rails);
    getchar(); // Clear buffer

    if (rails <= 1) {
        printf("Rail Fence Cipher Output: %s", text);
        return;
    }

    int len = strlen(text) - 1; // Exclude newline
    char rail[50][1000];
    for (int i = 0; i < rails; i++) {
        for (int j = 0; j < len; j++) {
            rail[i][j] = '.';
        }
    }

    // Fill rail matrix
    int row = 0, dir = 1; // 1 for down, -1 for up
    for (int i = 0; i < len; i++) {
        rail[row][i] = text[i];
        row += dir;
        if (row == rails - 1 || row == 0) {
            dir = -dir;
        }
    }

    // Read off rails
    int k = 0;
    for (int i = 0; i < rails; i++) {
        for (int j = 0; j < len; j++) {
            if (rail[i][j] != '.') {
                output[k++] = rail[i][j];
            }
        }
    }
    output[k] = '\0';
    printf("Rail Fence Cipher Output: %s\n", output);
}

// Route Cipher
void routeCipher() {
    char text[1000];
    int rows, cols;
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter rows and columns for grid: ");
    scanf("%d %d", &rows, &cols);
    getchar(); // Clear buffer

    int len = strlen(text) - 1; // Exclude newline
    char grid[50][50];
    int k = 0;

    // Fill grid row by row
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (k < len && isalpha(text[k])) {
                grid[i][j] = text[k++];
            } else {
                grid[i][j] = 'X'; // Padding
            }
        }
    }

    // Read off in spiral (clockwise from top-left)
    char output[1000];
    k = 0;
    int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) {
            output[k++] = grid[top][j];
        }
        top++;
        for (int i = top; i <= bottom; i++) {
            output[k++] = grid[i][right];
        }
        right--;
        if (top <= bottom) {
            for (int j = right; j >= left; j--) {
                output[k++] = grid[bottom][j];
            }
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                output[k++] = grid[i][left];
            }
            left++;
        }
    }
    output[k] = '\0';
    printf("Route Cipher Output: %s\n", output);
}

// Myszkowski Cipher
void myszkowskiCipher() {
    char text[1000], key[100];
    int cols;
    printf("Enter plaintext: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter key (alphabetic): ");
    fgets(key, sizeof(key), stdin);
    cols = strlen(key) - 1; // Exclude newline

    int len = strlen(text) - 1; // Exclude newline
    int rows = (len + cols - 1) / cols; // Calculate rows
    char grid[50][50];

    // Fill grid
    int k = 0;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (k < len && isalpha(text[k])) {
                grid[i][j] = text[k++];
            } else {
                grid[i][j] = 'X'; // Padding
            }
        }
    }

    // Create column order based on key
    int order[100];
    for (int i = 0; i < cols; i++) {
        order[i] = i;
    }
    // Sort columns by key
    for (int i = 0; i < cols - 1; i++) {
        for (int j = 0; j < cols - i - 1; j++) {
            if (key[order[j]] > key[order[j + 1]]) {
                int temp = order[j];
                order[j] = order[j + 1];
                order[j + 1] = temp;
            }
        }
    }

    // Read grid by key order
    char output[1000];
    k = 0;
    for (int keyVal = 'A'; keyVal <= 'Z'; keyVal++) {
        for (int j = 0; j < cols; j++) {
            if (toupper(key[order[j]]) == keyVal) {
                for (int i = 0; i < rows; i++) {
                    if (grid[i][order[j]] != '\0') {
                        output[k++] = grid[i][order[j]];
                    }
                }
            }
        }
    }
    output[k] = '\0';
    printf("Myszkowski Cipher Output: %s\n", output);
}

// Menu function
void menu() {
    int choice;
    while (1) {
        printf("\n--- Cryptographic Algorithms ---\n");
        printf("1. Atbash Cipher\n");
        printf("2. Caesar Cipher\n");
        printf("3. August Cipher\n");
        printf("4. Affine Cipher\n");
        printf("5. Vigenere Cipher\n");
        printf("6. Gronsfeld Cipher\n");
        printf("7. Beaufort Cipher\n");
        printf("8. Autokey Cipher\n");
        printf("9. Running Key Cipher\n");
        printf("10. Hill Cipher\n");
        printf("11. Rail Fence Cipher\n");
        printf("12. Route Cipher\n");
        printf("13. Myszkowski Cipher\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar(); // Clear buffer

        switch (choice) {
            case 1: atbashCipher(); break;
            case 2: caesarCipher(); break;
            case 3: augustCipher(); break;
            case 4: affineCipher(); break;
            case 5: vigenereCipher(); break;
            case 6: gronsfeldCipher(); break;
            case 7: beaufortCipher(); break;
            case 8: autokeyCipher(); break;
            case 9: runningKeyCipher(); break;
            case 10: hillCipher(); break;
            case 11: railFenceCipher(); break;
            case 12: routeCipher(); break;
            case 13: myszkowskiCipher(); break;
            case 0: exit(0);
            default: printf("Invalid choice! Try again.\n");
        }
    }
}

int main() {
    menu();
    return 0;
}