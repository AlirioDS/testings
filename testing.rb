puts 'Introduzca cualquier Palabra'
str = gets.chomp

def delete_reverse_vowel(str)
    remove = str.delete 'aeiouAEIOU'
    reverse = remove.reverse
    return reverse
end

puts delete_reverse_vowel(str)
