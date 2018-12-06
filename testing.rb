puts 'Introduzca Palabra'
str = gets.chomp

def delete_reverse_vowel(str)
  str.delete 'aeiouAEIOU'.reverse
end

puts delete_reverse_vowel(str)
