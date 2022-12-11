module.exports = {
    // 拡張子がDart のファイルだけを対象にする
    '**/*.dart': (filenames) => {
        // FreezedとJsonSerializable で生成したファイルは除外する
        const regex = /(g|freezed).dart/;
        const formatTargetFileNames = filenames.map((filename) => regex.test(filename) ? '' : filename).join(' ')

        if (!formatTargetFileNames.length) {
            return []
        }

        return [
            `flutter format --fix -l 100 ${formatTargetFileNames}`,
            `git add ${formatTargetFileNames}`,
        ]
    }
}