export languages=$(node ./generate-languages.js);
# echo $languages
# var1=${PS1%-*}
# var2=${PS1#*-}
IFS="-"
read -a strarr <<< "$languages"
# echo ${strarr[0]} > ./src/Data/Assets/i18n/translations/en.json
# echo ${strarr[1]} > ./src/Data/Assets/i18n/translations/es.json
# echo ${strarr[2]} > ./src/Data/Assets/i18n/translations/iw.json
echo ${strarr[0]}
echo ${strarr[1]}
echo ${strarr[2]}
echo ${strarr[3]}
# for val in "${strarr[@]}";
# do
#     printf "$val\n"
# done