<?xml version="1.0" encoding="UTF-8"?><project xmlns="http://grogra.de/registry" graph="graph.xml">
 <import plugin="de.grogra.math" version="1.5"/>
 <import plugin="de.grogra.imp2d" version="1.5"/>
 <import plugin="de.grogra.imp3d" version="1.5"/>
 <import plugin="de.grogra.pf" version="1.5"/>
 <import plugin="de.grogra.rgg" version="1.5"/>
 <import plugin="de.grogra.vecmath" version="1.5"/>
 <import plugin="de.grogra.imp" version="1.5"/>
 <registry>
  <ref name="project">
   <ref name="objects">
    <ref name="files">
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="main.rgg" systemId="pfs:main.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters.rgg" systemId="pfs:parameters.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="rewrites.rgg" systemId="pfs:rewrites.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="updates.rgg" systemId="pfs:updates.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="initiation.rgg" systemId="pfs:initiation.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="modules_base.rgg" systemId="pfs:modules_base.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="modules_organs.rgg" systemId="pfs:modules_organs.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="modules_light.rgg" systemId="pfs:modules_light.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters0.rgg" systemId="pfs:parameters0.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters1.rgg" systemId="pfs:parameters1.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters2.rgg" systemId="pfs:parameters2.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters3.rgg" systemId="pfs:parameters3.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters4.rgg" systemId="pfs:parameters4.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="environment.rgg" systemId="pfs:environment.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters5.rgg" systemId="pfs:parameters5.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters6.rgg" systemId="pfs:parameters6.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters7.rgg" systemId="pfs:parameters7.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters8.rgg" systemId="pfs:parameters8.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters9.rgg" systemId="pfs:parameters9.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters10.rgg" systemId="pfs:parameters10.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters11.rgg" systemId="pfs:parameters11.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="modules_soil.rgg" systemId="pfs:modules_soil.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="CSVReaderFinal.rgg" systemId="pfs:CSVReaderFinal.rgg"/>
    </ref>
    <ref name="datasets">
     <de.grogra.pf.registry.SharedValue name="Organ length profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFE9yZ2FuIGxlbmd0aCBwcm9maWxlcA=="/>
     <de.grogra.pf.registry.SharedValue name="Plant source/sink ratio" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAF1BsYW50IHNvdXJjZS9zaW5rIHJhdGlvcA=="/>
     <de.grogra.pf.registry.SharedValue name="Field biomass" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQADUZpZWxkIGJpb21hc3Nw"/>
     <de.grogra.pf.registry.SharedValue name="Plant yield" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAC1BsYW50IHlpZWxkcA=="/>
     <de.grogra.pf.registry.SharedValue name="Plant Biomass (g)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAEVBsYW50IEJpb21hc3MgKGcpcA=="/>
     <de.grogra.pf.registry.SharedValue name="Plant substrate reserves (g)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAHFBsYW50IHN1YnN0cmF0ZSByZXNlcnZlcyAoZylw"/>
     <de.grogra.pf.registry.SharedValue name="Plant yield (g)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAD1BsYW50IHlpZWxkIChnKXA="/>
     <de.grogra.pf.registry.SharedValue name="Plant Leaf Area (m2)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFFBsYW50IExlYWYgQXJlYSAobTIpcA=="/>
     <de.grogra.pf.registry.SharedValue name="Plant Height (m)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAEFBsYW50IEhlaWdodCAobSlw"/>
     <de.grogra.pf.registry.SharedValue name="Field yield" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAC0ZpZWxkIHlpZWxkcA=="/>
     <de.grogra.pf.registry.SharedValue name="Plant R:FR" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAClBsYW50IFI6RlJw"/>
     <de.grogra.pf.registry.SharedValue name="Plant fPAR" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAClBsYW50IGZQQVJw"/>
     <de.grogra.pf.registry.SharedValue name="Plant lbRatio" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQADVBsYW50IGxiUmF0aW9w"/>
     <de.grogra.pf.registry.SharedValue name="Simulation rate (steps/s)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAGVNpbXVsYXRpb24gcmF0ZSAoc3RlcHMvcylw"/>
     <de.grogra.pf.registry.SharedValue name="Leaf area index" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAD0xlYWYgYXJlYSBpbmRleHA="/>
     <de.grogra.pf.registry.SharedValue name="Field-level output" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAEkZpZWxkLWxldmVsIG91dHB1dHA="/>
     <de.grogra.pf.registry.SharedValue name="Plant-level output" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAElBsYW50LWxldmVsIG91dHB1dHA="/>
     <de.grogra.pf.registry.SharedValue name="Branch number" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQADUJyYW5jaCBudW1iZXJw"/>
     <de.grogra.pf.registry.SharedValue name="Light Transect X" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAEExpZ2h0IFRyYW5zZWN0IFhw"/>
     <de.grogra.pf.registry.SharedValue name="Light Transect Y" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAEExpZ2h0IFRyYW5zZWN0IFlw"/>
     <de.grogra.pf.registry.SharedValue name="Leaf init &amp; appearance" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFkxlYWYgaW5pdCAmIGFwcGVhcmFuY2Vw"/>
     <de.grogra.pf.registry.SharedValue name="Tile and sensor light" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFVRpbGUgYW5kIHNlbnNvciBsaWdodHA="/>
     <de.grogra.pf.registry.SharedValue name="Light" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQABUxpZ2h0cA=="/>
     <de.grogra.pf.registry.SharedValue name="Field fPAR" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQACkZpZWxkIGZQQVJw"/>
     <de.grogra.pf.registry.SharedValue name="Field RFR" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQACUZpZWxkIFJGUnA="/>
     <de.grogra.pf.registry.SharedValue name="Thermal time accumulated" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAGFRoZXJtYWwgdGltZSBhY2N1bXVsYXRlZHA="/>
     <de.grogra.pf.registry.SharedValue name="Shoots m-2" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAClNob290cyBtLTJw"/>
     <de.grogra.pf.registry.SharedValue name="Tillering" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQACVRpbGxlcmluZ3A="/>
     <de.grogra.pf.registry.SharedValue name="Number of Green Leaves" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFk51bWJlciBvZiBHcmVlbiBMZWF2ZXNw"/>
     <de.grogra.pf.registry.SharedValue name="Biomass partitioning" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFEJpb21hc3MgcGFydGl0aW9uaW5ncA=="/>
     <de.grogra.pf.registry.SharedValue name="Biomass partitioning (Profile Plant)" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAJEJpb21hc3MgcGFydGl0aW9uaW5nIChQcm9maWxlIFBsYW50KXA="/>
     <de.grogra.pf.registry.SharedValue name="Sucrose content profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAF1N1Y3Jvc2UgY29udGVudCBwcm9maWxlcA=="/>
     <de.grogra.pf.registry.SharedValue name="Field yield Sugarcane" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFUZpZWxkIHlpZWxkIFN1Z2FyY2FuZXA="/>
     <de.grogra.pf.registry.SharedValue name="Field biomass Sugarcane" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAF0ZpZWxkIGJpb21hc3MgU3VnYXJjYW5lcA=="/>
     <de.grogra.pf.registry.SharedValue name="Organ dimensions profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAGE9yZ2FuIGRpbWVuc2lvbnMgcHJvZmlsZXA="/>
     <de.grogra.pf.registry.SharedValue name="Leaves Profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQADkxlYXZlcyBQcm9maWxlcA=="/>
     <de.grogra.pf.registry.SharedValue name="Leaf Profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQADExlYWYgUHJvZmlsZXA="/>
     <de.grogra.pf.registry.SharedValue name="Average Leaf Profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFEF2ZXJhZ2UgTGVhZiBQcm9maWxlcA=="/>
     <de.grogra.pf.registry.SharedValue name="Sugarcane Yield" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAD1N1Z2FyY2FuZSBZaWVsZHA="/>
     <de.grogra.pf.registry.SharedValue name="Internode composition profile" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAHUludGVybm9kZSBjb21wb3NpdGlvbiBwcm9maWxlcA=="/>
     <de.grogra.pf.registry.SharedValue name="Soil Water Content" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAElNvaWwgV2F0ZXIgQ29udGVudHA="/>
     <de.grogra.pf.registry.SharedValue name="Soil Water Monitoring" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAFVNvaWwgV2F0ZXIgTW9uaXRvcmluZ3A="/>
     <de.grogra.pf.registry.SharedValue name="Soil Water Content [cm3 / cm3]" type="de.grogra.pf.data.Dataset" value="serialized:rO0ABXNyABlkZS5ncm9ncmEucGYuZGF0YS5EYXRhc2V0Pri86I/xbusCAAlaAAxzZXJpZXNJblJvd3NMAARiaW5zdAAVTGphdmEvdXRpbC9BcnJheUxpc3Q7TAANY2F0ZWdvcnlMYWJlbHQAEkxqYXZhL2xhbmcvU3RyaW5nO0wACmNvbHVtbktleXNxAH4AAUwABW9yZGVydAAcTG9yZy9qZnJlZS9kYXRhL0RvbWFpbk9yZGVyO0wAB3Jvd0tleXNxAH4AAUwABHJvd3NxAH4AAUwABXRpdGxlcQB+AAJMAAp2YWx1ZUxhYmVscQB+AAJ4cABzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhwc3EAfgAFAAAAAHcEAAAAAHhzcQB+AAUAAAAAdwQAAAAAeHQAHlNvaWwgV2F0ZXIgQ29udGVudCBbY20zIC8gY20zXXA="/>
    </ref>
    <ref name="images">
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="ear1" objDescribes="true" systemId="pfs:data/images/ear1.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="ear11" objDescribes="true" systemId="pfs:data/images/ear11.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="ear2" objDescribes="true" systemId="pfs:data/images/ear2.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="ear2bw" objDescribes="true" systemId="pfs:data/images/ear2bw.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="quinoa" objDescribes="true" systemId="pfs:data/images/quinoa.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="ear2red" objDescribes="true" systemId="pfs:data/images/ear2red.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="stripes" objDescribes="true" systemId="pfs:data/images/stripes.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="sunflower_front" objDescribes="true" systemId="pfs:data/images/sunflower_front.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="sunflower_back1" objDescribes="true" systemId="pfs:data/images/sunflower_back1.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
     <de.grogra.pf.ui.registry.FileObjectItem mimeType="image/png" name="tassel1" objDescribes="true" systemId="pfs:data/images/tassel1.png" type="de.grogra.imp.objects.FixedImageAdapter"/>
    </ref>
    <ref name="meta">
     <de.grogra.pf.registry.NodeReference name="main" ref="36217385"/>
     <de.grogra.pf.registry.NodeReference name="parameters" ref="36217386"/>
     <de.grogra.pf.registry.NodeReference name="rewrites" ref="36217387"/>
     <de.grogra.pf.registry.NodeReference name="updates" ref="36217388"/>
     <de.grogra.pf.registry.NodeReference name="initiation" ref="36217389"/>
     <de.grogra.pf.registry.NodeReference name="modules_base" ref="36217390"/>
     <de.grogra.pf.registry.NodeReference name="modules_organs" ref="36217391"/>
     <de.grogra.pf.registry.NodeReference name="modules_light" ref="36217392"/>
     <de.grogra.pf.registry.NodeReference name="parameters0" ref="36217393"/>
     <de.grogra.pf.registry.NodeReference name="parameters1" ref="36217394"/>
     <de.grogra.pf.registry.NodeReference name="parameters2" ref="36217395"/>
     <de.grogra.pf.registry.NodeReference name="parameters3" ref="36217396"/>
     <de.grogra.pf.registry.NodeReference name="parameters4" ref="36217397"/>
     <de.grogra.pf.registry.NodeReference name="environment" ref="36217398"/>
     <de.grogra.pf.registry.NodeReference name="parameters5" ref="36217399"/>
     <de.grogra.pf.registry.NodeReference name="parameters6" ref="36217400"/>
     <de.grogra.pf.registry.NodeReference name="parameters7" ref="36217401"/>
     <de.grogra.pf.registry.NodeReference name="parameters8" ref="36217402"/>
     <de.grogra.pf.registry.NodeReference name="parameters9" ref="36217403"/>
     <de.grogra.pf.registry.NodeReference name="parameters10" ref="36217404"/>
     <de.grogra.pf.registry.NodeReference name="parameters11" ref="36217405"/>
     <de.grogra.pf.registry.NodeReference name="modules_soil" ref="36217406"/>
     <de.grogra.pf.registry.NodeReference name="CSVReaderFinal" ref="36217407"/>
    </ref>
    <ref name="3d">
     <ref name="shaders">
      <de.grogra.pf.registry.SONodeReference name="ear" objDescribes="true" ref="4094317"/>
      <de.grogra.pf.registry.SONodeReference name="earBW" objDescribes="true" ref="4109732"/>
      <de.grogra.pf.registry.SONodeReference name="quinoaSpike" objDescribes="true" ref="11956727"/>
      <de.grogra.pf.registry.SONodeReference name="Lambert" objDescribes="true" ref="29663500"/>
      <de.grogra.pf.registry.SONodeReference name="Lambert 2" objDescribes="true" ref="31489129"/>
      <de.grogra.pf.registry.SONodeReference name="sunflower" objDescribes="true" ref="31510482"/>
      <de.grogra.pf.registry.SONodeReference name="sunflowerBack" objDescribes="true" ref="31510485"/>
      <de.grogra.pf.registry.SONodeReference name="maizeSpike" objDescribes="true" ref="31516421"/>
     </ref>
    </ref>
   </ref>
  </ref>
  <ref name="workbench">
   <ref name="state">
    <de.grogra.pf.ui.registry.Layout name="layout">
     <de.grogra.pf.ui.registry.MainWindow>
      <de.grogra.pf.ui.registry.Split location="0.48481676">
       <de.grogra.pf.ui.registry.Split orientation="0">
        <de.grogra.pf.ui.registry.Split location="0.6710098" orientation="0">
         <de.grogra.pf.ui.registry.Split orientation="0">
          <de.grogra.pf.registry.Link source="/ui/panels/rgg/toolbar"/>
          <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/3d/defaultview">
           <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/3d/defaultview"/>
           <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="View"/>
           <de.grogra.pf.registry.Option name="view" type="de.grogra.imp3d.View3D" value="graphDescriptor=[de.grogra.imp.ProjectGraphDescriptor]visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 visibleScales={true true true true true true true true true true true true true true true}camera=(minZ=0.1 maxZ=2000.0 projection=[de.grogra.imp3d.PerspectiveProjection aspect=1.0 fieldOfView=1.1689649]transformation=(0.6097177917379771 -0.7926185806793842 0.0 -0.05782901747442617 0.25435497577514365 0.19566126498606612 0.9471115117462212 0.4722529942906369 -0.7506981821854354 -0.577470739471579 0.320904634303599 -1.955492273381921 0.0 0.0 0.0 1.0))navigator=null"/>
          </de.grogra.pf.ui.registry.PanelFactory>
         </de.grogra.pf.ui.registry.Split>
         <de.grogra.pf.ui.registry.Split location="0.47925764">
          <de.grogra.pf.ui.registry.Tab selectedIndex="4">
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Simulation rate (steps\/s)"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Simulation rate (steps/s)"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Simulation rate (steps/s)"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Field fPAR"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Field fPAR"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Field fPAR"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Field RFR"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Field RFR"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Field RFR"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Leaf area index"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Leaf area index"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Leaf area index"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Field biomass"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Field biomass"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Field biomass"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Field yield"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Field yield"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Field yield"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Tillering"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Tillering"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Tillering"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Light Transect X"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Light Transect X"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Light Transect X"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Light Transect Y"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Light Transect Y"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Light Transect Y"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
           </de.grogra.pf.ui.registry.PanelFactory>
          </de.grogra.pf.ui.registry.Tab>
          <de.grogra.pf.ui.registry.Tab selectedIndex="1">
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Leaf init &amp; appearance"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Leaf init &amp; appearance"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Leaf init &amp; appearance"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Thermal time accumulated"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Thermal time accumulated"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Thermal time accumulated"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant Height (m)"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant Height (m)"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant Height (m)"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant Leaf Area (m2)"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant Leaf Area (m2)"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant Leaf Area (m2)"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant fPAR"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant fPAR"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant fPAR"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant R:FR"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant R:FR"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant R:FR"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant source\/sink ratio"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant source/sink ratio"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant source/sink ratio"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant Biomass (g)"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant Biomass (g)"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant Biomass (g)"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant substrate reserves (g)"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant substrate reserves (g)"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant substrate reserves (g)"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant yield (g)"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant yield (g)"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant yield (g)"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="2"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Organ length profile"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Organ length profile"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Organ length profile"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Plant lbRatio"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Plant lbRatio"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Plant lbRatio"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Number of Green Leaves"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Number of Green Leaves"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Number of Green Leaves"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
           <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
            <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Branch number"/>
            <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Branch number"/>
            <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Branch number"/>
            <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
           </de.grogra.pf.ui.registry.PanelFactory>
          </de.grogra.pf.ui.registry.Tab>
         </de.grogra.pf.ui.registry.Split>
        </de.grogra.pf.ui.registry.Split>
        <de.grogra.pf.registry.Link source="/ui/panels/statusbar"/>
       </de.grogra.pf.ui.registry.Split>
       <de.grogra.pf.ui.registry.Split location="0.706191" orientation="0">
        <de.grogra.pf.ui.registry.Tab selectedIndex="3">
         <de.grogra.pf.registry.Link source="/ui/panels/attributeeditor"/>
         <de.grogra.pf.registry.Link source="/ui/panels/table"/>
         <de.grogra.pf.registry.Link source="/ui/panels/preferences"/>
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/texteditor">
          <de.grogra.pf.registry.Option name="documents" type="java.lang.String" value="&quot;\&quot;pfs:environment.rgg\&quot;,\&quot;pfs:initiation.rgg\&quot;,\&quot;pfs:main.rgg\&quot;,\&quot;pfs:modules_organs.rgg\&quot;,\&quot;pfs:modules_soil.rgg\&quot;,\&quot;pfs:parameters.rgg\&quot;,\&quot;pfs:parameters11.rgg\&quot;,\&quot;pfs:Untitled-1\&quot;,\&quot;pfs:updates.rgg\&quot;&quot;"/>
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/texteditor"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="jEdit - modules_soil.rgg (modified)"/>
          <de.grogra.pf.registry.Option name="selected" type="java.lang.String" value="pfs:modules_soil.rgg"/>
         </de.grogra.pf.ui.registry.PanelFactory>
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/2d/graph">
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/2d/graph"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Graph"/>
          <de.grogra.pf.registry.Option name="view" type="de.grogra.imp2d.View2D" value="graphDescriptor=[de.grogra.imp2d.graphs.TopologyGraphDescriptor source=[de.grogra.imp.ProjectGraphDescriptor]]visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 visibleScales={true true true true true true true true true true true true true true true}transformation=(44.9473678570375 -0.0 -404.52631071333747 0.0 -44.9473678570375 -235.97368124944688 -0.0 -0.0 1.0)layout=[de.grogra.imp2d.layout.GeneralPurposeLayout fit=true transformationSteps=1 idealDistance=1.5 yIdealDistance=1.5 maxNbOfSteps=25000 fast=false startAgain=false]"/>
         </de.grogra.pf.ui.registry.PanelFactory>
        </de.grogra.pf.ui.registry.Tab>
        <de.grogra.pf.ui.registry.Split location="0.54209447">
         <de.grogra.pf.ui.registry.Tab selectedIndex="0">
          <de.grogra.pf.registry.Link source="/ui/panels/rgg/console"/>
          <de.grogra.pf.registry.Link source="/ui/panels/objects/datasets"/>
         </de.grogra.pf.ui.registry.Tab>
         <de.grogra.pf.ui.registry.Tab selectedIndex="0">
          <de.grogra.pf.registry.Link source="/ui/panels/fileexplorer"/>
          <de.grogra.pf.registry.Link source="/ui/panels/objects/3d/shaders"/>
         </de.grogra.pf.ui.registry.Tab>
        </de.grogra.pf.ui.registry.Split>
       </de.grogra.pf.ui.registry.Split>
      </de.grogra.pf.ui.registry.Split>
     </de.grogra.pf.ui.registry.MainWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Biomass partitioning (Profile Plant)"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Biomass partitioning (Profile Plant)"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Biomass partitioning (Profile Plant)"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="300" width="500">
      <de.grogra.pf.registry.Link source="/ui/panels/log"/>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Field yield Sugarcane"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Field yield Sugarcane"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Field yield Sugarcane"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Average Leaf Profile"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Average Leaf Profile"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Average Leaf Profile"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Sugarcane Yield"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Sugarcane Yield"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Sugarcane Yield"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Field biomass Sugarcane"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Field biomass Sugarcane"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Field biomass Sugarcane"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Leaf Profile"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Leaf Profile"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Leaf Profile"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Sucrose content profile"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Sucrose content profile"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Sucrose content profile"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="476" width="702">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Organ dimensions profile"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Organ dimensions profile"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Organ dimensions profile"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="547" width="1407">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Soil Water Content [cm3 \/ cm3]"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Soil Water Content [cm3 / cm3]"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Soil Water Content [cm3 / cm3]"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="7"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="493" width="927">
      <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/chart">
       <de.grogra.pf.registry.Option name="dataset" type="java.lang.String" value="/project/objects/datasets/Internode composition profile"/>
       <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/chart?Internode composition profile"/>
       <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="Internode composition profile"/>
       <de.grogra.pf.registry.Option name="plot" type="java.lang.Integer" value="6"/>
      </de.grogra.pf.ui.registry.PanelFactory>
     </de.grogra.pf.ui.registry.FloatingWindow>
    </de.grogra.pf.ui.registry.Layout>
   </ref>
  </ref>
 </registry>
</project>
