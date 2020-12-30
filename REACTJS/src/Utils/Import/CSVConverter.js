export default async function csvToJSON(file, delimiter) {

    return new Promise((resolve, reject) => {

        let fr = new FileReader();

        fr.readAsText(file);

        fr.onload = function () {
            let csv = fr.result;
            let rows = csv.split('\n');
            let headers = rows[0].split(delimiter);

            if (headers.length === 1) {
                reject('Wrong delimiter!');
            }

            let result = [];

            for (let i = 1; i < rows.length; i++) {

                let obj = {};
                let currentRow = rows[i].split(delimiter);

                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentRow[j];
                }

                result.push(obj);

            }

            resolve(result);
        }

        fr.onerror = function(err) {
            reject(err);
        }

    });
}