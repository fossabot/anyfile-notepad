dist.tgz:
	make dist
	echo "Press any key to launch archive build." && read dummy
	tar  -cvzf dist.tgz dist/

dist:
	mkdir dist
	AFN_BUILD_DIR=dist/ bash afn-app.sh

clean:
	rm -fr dist
	rm -fr fully-static/
	rm -f client-dist.tgz

.PHONY : extract-i18n-strings

extract-i18n-strings:
	grep -roP 'i18n.".*?"' ./ | grep -oP '".*"' | sort -h | uniq
	grep -roP "i18n.'.*?'" ./ | grep -oP "'.*'" | sort -h | uniq
	grep -r 'modal' ./ | grep -oP 'title\s*=\s*".*?"' | grep -oP '".*"'
	grep -r 'modal' ./ | grep -oP 'message\s*=\s*".*?"' | grep -oP '".*"'

.PHONY : tx-push

tx-push:
	tx push -s locales/_en.json

clean-locales:
	find locales/ -type f -exec bash -c 'cat {} | python -m json.tool > /tmp/lo.tmp && mv /tmp/lo.tmp {}' \;
