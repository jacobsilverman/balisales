export languages=$(node ./generate-languages.js);
# echo $languages
# var1=${PS1%-*}
# var2=${PS1#*-}
IFS=";"
read -a strarr <<< "$languages"
# echo ${strarr[0]} > ./src/Data/Assets/i18n/translations/en.json
# echo ${strarr[1]} > ./src/Data/Assets/i18n/translations/es.json
# echo ${strarr[2]} > ./src/Data/Assets/i18n/translations/iw.json
# echo ${strarr[3]} > ./src/Data/Assets/i18n/translations/ar.json
# echo ${strarr[4]} > ./src/Data/Assets/i18n/translations/zh.json
i=0
for FILE in ./src/Data/Assets/i18n/translations/*;do 
    # echo $FILE;
    # echo ${strarr[${i}]}
    echo ${strarr[${i}]} > $FILE
    i=$(( i + 1 ))
done
# echo ${strarr[0]}
# echo ${strarr[1]}
# echo ${strarr[2]}
# echo ${strarr[3]}
# echo ${strarr[4]}
# for val in "${strarr[@]}";
# do
#     printf "$val\n"
# done