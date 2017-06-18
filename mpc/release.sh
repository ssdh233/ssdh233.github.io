source_directory="${HOME}/Desktop/Workspace/mahjong-pai-converter/"
release_directory="${HOME}/Desktop/Workspace/matsumatsu233.github.io/mpc/"

echo ${source_directory}
echo ${release_directory}

file=(
  "index.html"
  "main.css"
  "lib/bundle.js"
)
for element in ${file[@]}
do
  cp ${source_directory}$element ${release_directory}$element
done

echo "release complete"